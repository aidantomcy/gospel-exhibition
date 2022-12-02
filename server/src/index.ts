import express from "express";
import { config } from "dotenv";
import gospelMatthewRouter from "./routes/gospelMatthew";
import gospelMarkRouter from "./routes/gospelMark";
import gospelLukeRouter from "./routes/gospelLuke";
import gospelJohnRouter from "./routes/gospelJohn";

config();
const app = express();
const PORT = process.env.PORT ?? 5000;

app.get("/", (req, res) => {
  res.json({
    gospels: ["matthew", "mark", "luke", "john"],
  });
});
app.use("/gospels/matthew", gospelMatthewRouter);
app.use("/gospels/mark", gospelMarkRouter);
app.use("/gospels/luke", gospelLukeRouter);
app.use("/gospels/john", gospelJohnRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
