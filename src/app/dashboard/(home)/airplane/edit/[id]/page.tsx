import FormAirplane from "../../components/form-airplane";
import { getAirplaneById } from "../../lib/actions";

type Params = {
  id: string;
};

interface EditAirplanePageProps {
  params: Params;
}

export default async function EditAirplanePageProps({
  params,
}: EditAirplanePageProps) {
  const data = await getAirplaneById(params.id);
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Edit data Airplane</div>
      </div>
      <FormAirplane type="Edit" defaultValues={data} />
    </div>
  );
}
