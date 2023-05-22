import { Router } from "express";
import { getTasks, getTaskById, addTasks, updateTask, deleteTask } from "../controllers/task.controller.ts";

const router = Router();

router.get("/", getTasks);
router.get("/:id", getTaskById);
router.post("/", addTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;