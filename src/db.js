import { createPool } from "mysql2/promise";
import { DB_HOST,
  DBPORT, 
  DB_USER, 
  DB_PASSWORD, 
  DB_DATABSES  
} from "./config.js";

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port : DBPORT,
  database: DB_DATABSES
})