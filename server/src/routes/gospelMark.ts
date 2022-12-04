import { Router } from "express";
import {
  addParable,
  deleteParable,
  getParables,
  updateParable,
} from "../controllers/gospelMarkController";

const router = Router();

router.route("/").get(getParables).post(addParable);
router.route("/:id").put(updateParable).delete(deleteParable);

export default router;
