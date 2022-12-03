import { Router } from "express";
import { getParables } from "../controllers/gospelMatthewController";

const router = Router();

router.route("/").get(getParables);

export default router;
