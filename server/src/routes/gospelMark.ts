import { Router } from "express";
import Controller from "../controllers/Controller";

const router = Router();
const controller = new Controller("mark");
const { getParables, addParable, updateParable, deleteParable } = controller;

router.route("/").get(getParables).post(addParable);
router.route("/:id").put(updateParable).delete(deleteParable);

export default router;
