import expressAsyncHandler from "express-async-handler";
import Parable from "../models/parableModel";
import { z } from "zod";

class Controller {
  gospel: Gospels;

  constructor(gospel: Gospels) {
    this.gospel = gospel;
  }

  getParables = expressAsyncHandler(async (req, res) => {
    const parables = await Parable.find({ gospel: this.gospel });

    res.status(200).json(parables);
  });

  getIndividualParable = expressAsyncHandler(async (req, res) => {
    const parable = await Parable.findById(req.params.id);

    if (!parable) {
      res.status(400);
      throw new Error("parable not found");
    }

    res.status(200).json(parable);
  });

  addParable = expressAsyncHandler(async (req, res) => {
    const Data = z.object({
      title: z.string(),
      body: z.string(),
      explanation: z.string(),
    });

    const isValid = Data.safeParse(req.body).success;
    if (!isValid) {
      res.status(400);
      throw new Error("please provide data for all fields");
    }

    type Data = z.infer<typeof Data>;
    const { title, body, explanation }: Data = req.body;

    const parable = await Parable.create({
      gospel: this.gospel,
      title,
      body,
      explanation,
    });

    res.status(201).json(parable);
  });

  updateParable = expressAsyncHandler(async (req, res) => {
    const parable = await Parable.findById(req.params.id);

    if (!parable) {
      res.status(400);
      throw new Error("parable not found");
    }

    const updatedParable = Parable.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(204).json(updatedParable);
  });

  deleteParable = expressAsyncHandler(async (req, res) => {
    const parable = await Parable.findById(req.params.id);

    if (!parable) {
      res.status(400);
      throw new Error("parable not found");
    }

    await parable.remove();
    res.status(200).json({ id: req.params.id });
  });
}

export default Controller;
