const express = require("express");
const {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo,
    
}=require("../controllers/todoController");


const router = express.Router();
router.get("/gettodos", getTodos);

router.post("/createtodo", createTodo);
router.put("/updatetodo/:id", updateTodo);
router.delete("/deletetodo/:id",deleteTodo);

module.exports = router;