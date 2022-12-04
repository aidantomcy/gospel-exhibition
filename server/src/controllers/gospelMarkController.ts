import expressAsyncHandler from "express-async-handler";
import Parable from "../models/parableModel";

const getParables = expressAsyncHandler(async (req, res) => {
  const parables = await Parable.find({ gospel: "mark" });

  res.status(200).json(parables);
});

const addParable = expressAsyncHandler(async (req, res) => {
  type Data = {
    title: string;
    body: string;
    explanation: string;
  };

  const { title, body, explanation }: Data = req.body ?? {
    title: "",
    body: "",
    explanation: "",
  };

  if (title === "" || body === "" || explanation === "") {
    res.status(400);
    throw new Error("please provide data for all fields");
  }

  const parable = await Parable.create({
    gospel: "mark",
    body,
    explanation,
    title,
  });

  res.status(201).json(parable);
});

const updateParable = expressAsyncHandler(async (req, res) => {
  const parable = await Parable.findById(req.params.id);

  if (!parable) {
    res.status(400);
    throw new Error("parable not found");
  }

  const updatedParable = Parable.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(400).json(updatedParable);
});

const deleteParable = expressAsyncHandler(async (req, res) => {
  const parable = await Parable.findById(req.params.id);

  if (!parable) {
    res.status(400);
    throw new Error("parable not found");
  }

  await parable.remove();
  res.status(200).json({ id: req.params.id });
});

export { getParables, addParable, updateParable, deleteParable };
