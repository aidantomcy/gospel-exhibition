import express from "express";
import { PORT } from "./constants";
import connectDB from "./db/connectDB";
import errorHandler from "./middleware/errorMiddleware";
import registerRouter from "./routes/router";

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);
app.use("/gospels/matthew", registerRouter("matthew"));
app.use("/gospels/mark", registerRouter("mark"));
app.use("/gospels/luke", registerRouter("luke"));
app.use("/gospels/john", registerRouter("john"));

app.get("/", (req, res) => {
  res.status(200).json({
    gospels: ["matthew", "mark", "luke", "john"],
  });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
