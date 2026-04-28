// https://localhost:3000/api/todos/create-todo

const express = require("express");
const { createTodo, readTodos } = require("../controllers/todo.controllers");

const router = express.Router();


router.get("/read-todo",readTodos)
router.post("/create-todo",createTodo);

module.exports = router;