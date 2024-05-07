import { z } from "zod";
const ACCEPT_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

// const IncludeElement = (file) => {
//   for (let i = 0; i < ACCEPT_IMAGE_TYPES.length; i++) {
//     const el = ACCEPT_IMAGE_TYPES[i];
//     if(file === el) return true;
//   }
//   return false;
// }

const MAX_FILES_SIZE = 2000000; // 2MB

export const airplaneFormSchema = z.object({
  name: z
    .string({ required_error: "Nama Pesawat tidak boleh kosong" })
    .min(4, { message: "Nama Pesawat harus memiliki minimal 4 karakter" }),
  code: z
    .string({ required_error: "Kode Pesawat tidak boleh kosong" })
    .regex(/^[A-Z]{2}-[0-9]{3}$/, "Format kode harus [XX-111]"), // ABD-123
  image: z
    .any()
    .refine(
      (file: File) => ACCEPT_IMAGE_TYPES.includes(file?.type),
      "Image harus berekstensi jpg, jpeg, dan png"
    )
    .refine(
      (file: File) => file?.size <= MAX_FILES_SIZE,
      "Image harus memiliki ukuran minimal 2MB"
    ),
});
