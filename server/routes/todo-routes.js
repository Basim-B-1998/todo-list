import {createTodo} from "../controllers/todo-controller.js";
import express from "express";
import {fetchTodo} from "../controllers/todo-controller.js";

const router = express.Router();

router.post('/todo', createTodo);
router.get('/todo', fetchTodo);

export default router;