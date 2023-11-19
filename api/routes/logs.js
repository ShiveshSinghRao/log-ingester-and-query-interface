import express from "express";
import { getLogs, createLog } from "../controllers/createLog.js";
const router = express.Router();

// creatring a log

router.post("/create", createLog);

// Getting all logs
router.get("/", getLogs);

export default router;
