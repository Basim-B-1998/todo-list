import {createTodo} from "../controllers/todo-controller.js";
import express from "express";
import {fetchTodo} from "../controllers/todo-controller.js";
import {editTodo} from "../controllers/todo-controller.js";

const router = express.Router();

router.post('/todo', createTodo);
router.get('/todo', fetchTodo);
router.put('/todo/:id', editTodo);

export default router;