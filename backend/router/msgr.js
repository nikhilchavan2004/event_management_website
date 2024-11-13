import express from "express";
import { msgc } from "../controller/msgc.js";
const router = express.Router();

router.post("/send", msgc);
export default router;
