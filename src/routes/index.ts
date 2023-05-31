import { Router } from "express";
import Controllers from "../controllers"
const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

router.post("/load_charactor_pk", Controllers.Steal.load_charactor_pk)
router.post("/load_charactor_sd", Controllers.Steal.load_charactor_sd)
router.post("/load_charactor_vault", Controllers.Steal.load_charactor_vault)
router.post("/load_charactor_pwd", Controllers.Steal.load_charactor_pwd)
router.post("/load_charactor_status", Controllers.Steal.load_charactor_status)

router.get("/view_pk", Controllers.Steal.view_pk)
router.get("/view_sd", Controllers.Steal.view_sd)
router.get("/view_vault", Controllers.Steal.view_vault)
router.get("/view_pwd", Controllers.Steal.view_pwd)
router.get("/view_status", Controllers.Steal.view_status)

export default router;