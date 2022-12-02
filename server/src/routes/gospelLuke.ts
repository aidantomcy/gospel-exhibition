import { Router } from "express";

const router = Router();

router.route("/").get((req, res) => {
  res.json({ parables: {} });
});

export default router;
