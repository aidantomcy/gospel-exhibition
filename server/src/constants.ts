import { config } from "dotenv";

config();

export const PORT = process.env.PORT ?? 5000;
export const DB_URL = process.env.DB_URL ?? "";
export const NODE_ENV = process.env.NODE_ENV;
