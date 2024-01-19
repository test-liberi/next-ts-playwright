'use client'

import { FormLabel, FormField, FormItem, FormControl, FormMessage, Form } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { DrugFormValues, drugFormSchema } from "@/services/drugs.types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateDrug } from "@/services/drugs"
import { useRouter } from "next/navigation"

const defaultValues: Partial<DrugFormValues> = {}

export default function NewDrug(){

  const createDrug = useCreateDrug()
  const router = useRouter()
  const form = useForm<DrugFormValues>({
    resolver: zodResolver(drugFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: DrugFormValues) {
    createDrug.mutate(data)
    router.push('/')
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
                  name="name_fr"
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
                        <Input placeholder="shadcn" {...field} />
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
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Add drug</Button>
          </form>
        </Form>
      </main>
    )
}