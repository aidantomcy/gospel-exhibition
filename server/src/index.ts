import express from "express";
import gospelMatthewRouter from "./routes/gospelMatthew";
import gospelMarkRouter from "./routes/gospelMark";
import gospelLukeRouter from "./routes/gospelLuke";
import gospelJohnRouter from "./routes/gospelJohn";
import { PORT } from "./constants";
import connectDB from "./db/connectDB";

connectDB();
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    gospels: ["matthew", "mark", "luke", "john"],
  });
});
app.use("/gospels/matthew", gospelMatthewRouter);
app.use("/gospels/mark", gospelMarkRouter);
app.use("/gospels/luke", gospelLukeRouter);
app.use("/gospels/john", gospelJohnRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
