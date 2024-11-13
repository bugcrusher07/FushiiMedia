import pg from "pg";
import {Pool} from "pg";

const connectionString = process.env.DATABASE_URL
const pool = new Pool({
  connectionString:connectionString
})

export const db = {
  query: (text: string, params?: any[]) => pool.query(text, params),
}