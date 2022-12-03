import { Router } from "express";
import { getParables } from "../controllers/gospelLukeController";

const router = Router();

router.route("/").get(getParables);

export default router;
