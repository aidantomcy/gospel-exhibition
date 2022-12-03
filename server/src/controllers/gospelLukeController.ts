import expressAsyncHandler from "express-async-handler";
import Parable from "../models/parableModel";

const getParables = expressAsyncHandler(async (req, res) => {
  const parables = await Parable.find({ gospel: "luke" });

  res.status(200).json(parables);
});

export { getParables };
