import {createTodo} from "../controllers/todo-controller.js";
import express from "express";

const router = express.Router();

router.post('/todo', createTodo);

export default router;