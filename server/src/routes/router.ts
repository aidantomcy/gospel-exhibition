import { Router } from "express";
import Controller from "../controllers/Controller";

const registerRouter = (gospel: Gospels): Router => {
  const router = Router();
  const controller = new Controller(gospel);
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

  return router;
};

export default registerRouter;
