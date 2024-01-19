import { NextRequest, NextResponse } from "next/server";
import { getDBConnection, response } from "../../utils";
import { IDrug } from "../../types";


// get all drugs
export async function GET(req:NextRequest, params: {params: {id: string}}){
    // open new db connection if not already open
    const db = await getDBConnection();

    const drug = await db!.get<IDrug>('SELECT * FROM drugs WHERE id = ?',params.params.id);

    return response(drug)
}


// delete drug
export async function DELETE(req:NextRequest,params: {params: {id: string}}){
    const db = await getDBConnection();

    const id = params.params.id;

    await db!.run(
        `DELETE FROM drugs WHERE id = ?`,
        [id]
    )

    return response({message: 'Drug deleted successfully'})
}