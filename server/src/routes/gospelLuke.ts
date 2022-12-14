import { Router } from "express";
import Controller from "../controllers/Controller";

const router = Router();
const controller = new Controller("luke");
const {
  getParables,
  getIndividualParable,
  addParable,
  updateParable,
  deleteParable,
} = controller;

router.route("/").get(getParables).post(addParable);
router
  .route("/:id")
  .get(getIndividualParable)
  .put(updateParable)
  .delete(deleteParable);

export default router;
