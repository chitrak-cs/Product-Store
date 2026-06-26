import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

export const sql = neon(process.env.DATABASE_URL);
// console.log("PGHOST:", PGHOST);
// console.log("PGDATABASE:", PGDATABASE);
// console.log("PGUSER:", PGUSER);
// console.log("PGPASSWORD:", PGPASSWORD);

//This creates an SQL connection using our environment variables


//this sql function we export is used as tagged template literal, which allows us to write SQL queries safely
