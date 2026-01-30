import { Router } from "express";
import { getDeveloper } from "./developer.controller.js";

const router = Router();

router.get("/", getDeveloper);

export default router;
