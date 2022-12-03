import { Router } from "express";
import { getParables } from "../controllers/gospelJohnController";

const router = Router();

router.route("/").get(getParables);

export default router;
