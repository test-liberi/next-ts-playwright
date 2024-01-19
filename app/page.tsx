'use client'


import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useDeleteDrug, useGetAllDrugs } from '@/services/drugs';
import { CrossCircledIcon, Pencil2Icon } from '@radix-ui/react-icons';

export default function Home() {

  const {data} = useGetAllDrugs()
  const deleteDrug = useDeleteDrug()

  return (
  <div className="flex flex-col p-20 ">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold py-10">Drugs</h1>
                <Link href="/new"><Button>Add Drug</Button></Link>
            </div>
            <Table className="bg-slate-100 rounded-sm p-3">
                <TableCaption>A list of all stored drugs</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[200px]">Name - en</TableHead>
                    <TableHead className="w-[200px]">Name - fr</TableHead>
                    <TableHead className="w-[100px]">Type</TableHead>
                    <TableHead className="w-[100px]">Category</TableHead>
                    <TableHead className="w-[100px]">Max Allowed Qty</TableHead>
                    <TableHead className="w-[100px]">Unit</TableHead>
                    <TableHead className="w-[100px]">Added on</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                   {data?.map((drug) => (
                      <TableRow key={drug.id}>
                       <TableCell className="font-medium"> {drug.name_en} </TableCell>
                       <TableCell className="font-medium"> {drug.name_fr} </TableCell>
                       <TableCell>{drug.Type}</TableCell>
                       <TableCell>{drug.Category}</TableCell>
                       <TableCell>{drug.Max_Allowed_Qty}</TableCell>
                       <TableCell>{drug.Unit}</TableCell>
                       <TableCell>{drug.Added}</TableCell>
                       <TableCell>{drug.Description}</TableCell>
                       <TableCell className="text-right flex">
                          <button className='hover:bg-slate-200 px-2 py-1'> <Pencil2Icon/> </button>
                          <button className='hover:bg-slate-200 px-2 py-1' onClick={() => deleteDrug.mutate(drug.id)}> <CrossCircledIcon/> </button>
                       </TableCell>
                      </TableRow>
                   ))}
                </TableBody>
            </Table>

        </div>

  );
}
