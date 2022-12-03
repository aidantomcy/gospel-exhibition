import { Router } from "express";
import { getParables } from "../controllers/gospelMarkController";

const router = Router();

router.route("/").get(getParables);

export default router;
