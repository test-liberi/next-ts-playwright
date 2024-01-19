
import { getDBConnection, response } from "../utils";
import { IDrug } from "../types";
import { NextRequest, NextResponse } from "next/server";


// get all drugs
export async function GET(req:NextRequest,res:NextResponse){
    // open new db connection if not already open
    const db = await getDBConnection();


    const drugs = await db!.all<IDrug[]>('SELECT * FROM drugs');

    return response(drugs)
}

// create drug
export async function POST(req:NextRequest,res:NextResponse){
    const db = await getDBConnection();

    const {name_en,name_fr,Type,Category,Max_Allowed_Qty,Unit,Added,Description} = await req.json();

    await db!.run(
        `INSERT INTO drugs (name_en,name_fr,Type,Category,Max_Allowed_Qty,Unit,Added,Description) VALUES (?,?,?,?,?,?,?,?)`,
        [name_en,name_fr,Type,Category,Max_Allowed_Qty,Unit,Added,Description]
    )

    return response({message: 'Drug created successfully'},201)
}


// update drug
export async function PUT(req:NextRequest,res:NextResponse){
    const db = await getDBConnection();

    const body = await req.json() satisfies IDrug;
    const {id,name_en,name_fr,Type,Category,Max_Allowed_Qty,Unit,Added,Description} = body
    console.log(body)

    await db!.run(
        `UPDATE drugs SET name_en = $name_en, name_fr = $name_fr, Type = $Type, Category = $Category, Max_Allowed_Qty = $Max_Allowed_Qty, Unit = $Unit, Description = $Description WHERE id = $id`,
        {$name_en: name_en, $name_fr: name_fr, $Type: Type, $Category: Category, $Max_Allowed_Qty: Max_Allowed_Qty, $Unit: Unit, $Description: Description, $id: id},
        (err) => {
            if(err){
                console.log(err)
            }
        }
    )

    return response({message: 'Drug updated successfully'})
}




