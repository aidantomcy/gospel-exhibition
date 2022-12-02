import express from "express";
import gospelMatthewRouter from "./routes/gospelMatthew";
import gospelMarkRouter from "./routes/gospelMark";
import gospelLukeRouter from "./routes/gospelLuke";
import gospelJohnRouter from "./routes/gospelJohn";
import { PORT } from "./constants";

const app = express();

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
