import { Router } from "express";

const router = Router();

router.route("/").get((req, res) => {
  res.status(200).json({ parables: {} });
});

export default router;
