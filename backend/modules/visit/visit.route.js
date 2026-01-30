import { Router } from "express";
import { registerVisit } from "./visit.controller.js";

const router = Router();

router.post("/", registerVisit);

export default router;
