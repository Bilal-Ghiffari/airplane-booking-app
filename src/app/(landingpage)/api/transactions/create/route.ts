import { NextRequest } from "next/server";
import prisma from "../../../../../../lib/prisma";
import { makeId } from "@/lib/utils";

const MIDTRANS_URL = process.env.NEXT_PUBLIC_MIDTRANS_URL ?? "";
const MIDTRANS_AUTH_KEY = process.env.NEXT_PUBLIC_MIDTRANS_AUTH_KEY ?? "";

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log("bodyJson", body);
  try {
    const transactions = await prisma.ticket.create({
      data: {
        bookingDate: body.bookingDate,
        code: `TRX-${makeId(7)}`,
        price: BigInt(body.price),
        status: "PENDING",
        customerId: body.customerId,
        flightId: body.flightId,
        seatId: body.seatId,
      },
    });

    await prisma.flightSeat.update({
      where: {
        id: transactions.seatId,
      },
      data: {
        isBooked: true,
      },
    });

    // midtrans payment
    let parameter = {
      transaction_details: {
        order_id: transactions.id,
        gross_amount: transactions.price.toString(),
      },
      // credit_card: {
      //   secure: true,
      // },
      item_details: [
        {
          id: body.flightId,
          price: body.price,
          quantity: 1,
          name: `Tiket Pesawat ${body.departureCityCode} - ${body.destinationCityCode}`,
        },
      ],
    };
    console.log("transactionID", parameter);
    const resMidtrans = await fetch(MIDTRANS_URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Basic ${MIDTRANS_AUTH_KEY}`,
      },
      body: JSON.stringify(parameter),
    });

    const midtrans = await resMidtrans.json();
    console.log("ResMidtrans", midtrans);

    await prisma.ticket.update({
      where: {
        id: transactions.id,
      },
      data: {
        tokenMidtrans: midtrans.token,
      },
    });

    return Response.json({ midtrans, transactions_id: transactions.id });
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
