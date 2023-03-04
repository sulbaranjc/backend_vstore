import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3150

export const DB_HOST = process.env.DB_HOST || "192.168.1.147"
export const DBPORT = process.env.DBPORT || 3306
export const DB_USER = process.env.DB_USER || "root"
export const DB_PASSWORD = process.env.DB_PASSWORD || "Jc10439536+"
export const DB_DATABSES = process.env.DB_DATABSES || "images"

 