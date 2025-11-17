const express = require("express");
const router = express.Router();

const {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo,
    
}=require("../controllers/todoController");



router.get("/gettodos", getTodos);

router.post("/createtodo", createTodo);
router.put("/updatetodo/:id", updateTodo);
router.delete("/deletetodo/:id",deleteTodo);

module.exports = router;