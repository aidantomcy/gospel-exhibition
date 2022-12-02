import mongoose from "mongoose";
import { DB_URL } from "../constants";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB_URL);

    console.log(`connected to mongodb database: ${conn.connection.host}`);
  } catch (err) {
    console.error("unable to connect to database:\n", err);
    process.exit(1);
  }
};

export default connectDB;
