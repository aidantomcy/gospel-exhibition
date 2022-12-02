import { config } from "dotenv";

config();

const PORT = process.env.PORT ?? 5000;
const DB_URL = process.env.DB_URL ?? "";

export { PORT, DB_URL };
