import express from "express";
import { config } from "dotenv";

config();
const app = express();
const PORT = process.env.PORT ?? 5000;

app.get("/", (req, res) => {
  res.json({
    message: "hey",
  });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
