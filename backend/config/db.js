import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD }= process.env;

// console.log("PGHOST:", PGHOST);
// console.log("PGDATABASE:", PGDATABASE);
// console.log("PGUSER:", PGUSER);
// console.log("PGPASSWORD:", PGPASSWORD);

//This creates an SQL connection using our environment variables
export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require&channel_binding=require`
)

//this sql function we export is used as tagged template literal, which allows us to write SQL queries safely
// # psql 'postgresql://neondb_owner:npg_YvIbU4ernJS7@ep-plain-waterfall-adetyax8-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'