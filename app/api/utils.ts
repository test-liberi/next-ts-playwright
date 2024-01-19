import sqlite3 from "sqlite3";
import { open ,Database} from "sqlite";

let db: Database | null = null;

export const getDBConnection = async () => {
    if(!db){
        db = await open({
            filename: './medicals.db',
            driver: sqlite3.Database
        })
    }

    return db;
}

export const response = <T>(res:T,status = 200) => {
    return new Response(JSON.stringify(res),{
        headers: {'content-type': 'application/json;charset=UTF-8'},
        status
    })
}