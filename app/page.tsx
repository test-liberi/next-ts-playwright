'use client'
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea";
import { useFieldArray, useForm } from "react-hook-form";
import z from 'zod'
import { Popover } from "@/components/ui/popover";


const drugFormSchema = z.object({
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
    .number()
    .min(1, {
      message: "Max_Allowed_Qty must be at least 2 characters.",
    }),
    Unit: z
    .string()
    .min(2, {
      message: "Unit  must be at least 2 characters.",
    }),
    Added: z
    .date(),
    Description: z
    .string()
    .min(2, {
      message: "Description must be at least 2 characters.",
    })
})

type DrugFormValues = z.infer<typeof drugFormSchema>


const defaultValues: Partial<DrugFormValues> = {}

export default function Home() {

  const form = useForm<DrugFormValues>({
    resolver: zodResolver(drugFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: DrugFormValues) {
    console.log(data)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <div>
              <FormLabel>Name </FormLabel>
            </div>
            <div className="flex space-x-2">
              <FormField
                control={form.control}
                name="name_en"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Eng 🇺🇸</FormLabel>
                    <FormControl>
                      <Input placeholder="Iopamiro 370mg/ml solution for injection 100ml" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name_en"
                render={({ field }) => 
                  <FormItem>
                    <FormLabel>Fr 🇫🇷</FormLabel>
                    <FormControl>
                      <Input placeholder="Iopamiro 370mg/ml solution injectable 100ml" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                }
              />
            </div>
          </div>

          <div className="flex space-x-2">
              <FormField
                control={form.control}
                name="Type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <FormControl>
                      <Input placeholder="Drug" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Category"
                render={({ field }) => 
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Input placeholder="Medicine" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                }
              />
            </div>

            <div className="flex space-x-2">
              <FormField
                control={form.control}
                name="Max_Allowed_Qty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Max Allowed Quantity</FormLabel>
                    <FormControl>
                      <Input type="10" placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Unit"
                render={({ field }) => 
                  <FormItem>
                    <FormLabel>Unit</FormLabel>
                    <FormControl>
                      <Input placeholder="Pc(s)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                }
              />
            </div>
          <FormField
            control={form.control}
            name="Description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Iopamidol 370 mg/ml solution for injection 100ml"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>
                  You can <span>@mention</span> other users and organizations to
                  link to them.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Add drug</Button>
        </form>
      </Form>
    </main>
  );
}
