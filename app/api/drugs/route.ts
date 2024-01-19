import sqlite3 from "sqlite3";
import { open ,Database} from "sqlite";
import { IDrug } from "../types";
import { NextRequest, NextResponse } from "next/server";

let db: Database | null = null;


// get all drugs
export async function GET(req:NextRequest,res:NextResponse){
    // open new db connection if not already open
    await checkDbConnection();


    const drugs = await db!.all<IDrug[]>('SELECT * FROM drugs');

    return response(drugs)
}

// create drug
export async function POST(req:NextRequest,res:NextResponse){
    await checkDbConnection();

    const {name_en,name_fr,Type,Category,Max_Allowed_Qty,Unit,Added,Description} = await req.json() satisfies IDrug;

    await db!.run(
        `INSERT INTO drugs (name_en,name_fr,Type,Category,Max_Allowed_Qty,Unit,Added,Description) VALUES (?,?,?,?,?,?,?,?)`,
        [name_en,name_fr,Type,Category,Max_Allowed_Qty,Unit,Added,Description]
    )

    return response({message: 'Drug created successfully'},201)
}


// update drug
export async function PUT(req:NextRequest,res:NextResponse){
    await checkDbConnection();

    const {id,name_en,name_fr,Type,Category,Max_Allowed_Qty,Unit,Added,Description} = await req.json() satisfies IDrug;

    await db!.run(
        `UPDATE drugs SET name_en = ?,name_fr = ?,Type = ?,Category = ?,Max_Allowed_Qty = ?,Unit = ?,Added = ?,Description = ? WHERE id = ?`,
        [name_en,name_fr,Type,Category,Max_Allowed_Qty,Unit,Added,Description,id]
    )

    return response({message: 'Drug updated successfully'})
}


// delete drug
export async function DELETE(req:NextRequest,res:NextResponse){
    await checkDbConnection();

    const {id} = await req.json() satisfies IDrug;

    await db!.run(
        `DELETE FROM drugs WHERE id = ?`,
        [id]
    )

    return response({message: 'Drug deleted successfully'})
}

const response = <T>(res:T,status = 200) => {
    return new Response(JSON.stringify(res),{
        headers: {'content-type': 'application/json;charset=UTF-8'},
        status
    })
}

const checkDbConnection = async () => {
    if(!db){
        db = await open({
            filename: './medicals.db',
            driver: sqlite3.Database
        })
    }
}