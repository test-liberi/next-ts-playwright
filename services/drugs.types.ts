import z from "zod"

export const drugFormSchema = z.object({
  name_en: z
    .string()
    .min(2, {
      message: "Drug name must be at least 2 characters.",
    }),
    name_fr: z
    .string()
    .min(2, {
      message: "Drug name must be at least 2 characters.",
    }),
    Type: z
    .string()
    .min(2, {
      message: "Type must be at least 2 characters.",
    }),
    Category: z
    .string()
    .min(2, {
      message: "Type must be at least 2 characters.",
    }),
    Max_Allowed_Qty: z
    .string()
    .min(1, {
      message: "Max_Allowed_Qty must be at least 2 characters.",
    }),
    Unit: z
    .string()
    .min(1, {
      message: "Unit  must be at least 2 characters.",
    }),
    Description: z
    .string()
    .min(2, {
      message: "Description must be at least 2 characters.",
    })
})

export type DrugFormValues = z.infer<typeof drugFormSchema>
