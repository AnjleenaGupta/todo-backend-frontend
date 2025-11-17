const Todo = require("../models/Todo");

// POST: naya todo create kare aur DB me save kare
const createTodo = async (req, res) => {
  try {
    const { title ,completed} = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const todo = await Todo.create({ title,completed:completd??false, });

    res.status(201).json({
      message: "Todo Created",
      todo
    });
  } catch (error) {
    console.error("Error creating Todo:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET: saare todos DB se laao
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });

    res.json({
      message: "All todos",
      todos,
    });
  } catch (error) {
    console.error("Error in getTodos:", error);
    res.status(500).json({ message: "Server error" });
  }
};


const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;          // URL se id
    const { title,completed } = req.body;         // body se new title
const updateData={};
    if (title!==undefined)updateData.title=title;
    if(completed!==undefined)updateData.completed=completed;
    const todo = await Todo.findByIdAndUpdate(todoId,updateData,{
      new:true,
    });
    if(!todo) {
      return res.status(400).json({ message: "Todo not found" });
    }

    
    res.json({
      message: "Todo Updated",
      todo
    });
  } catch (error) {
    console.error("Error updating Todo:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const deleteTodo= async(req,res)=>{
  try{
    const {id}=req.params;
    const deletedTodo= await Todo.findByIdAndDelete(id);
    if(!deletedTodo){
       return res.status(404).json({ message: "Todo not found" });
    }

    res.json({
      message: "Todo Deleted",
      todo: deletedTodo,
    });
  } catch (error) {
    console.error("Error in deleteTodo:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createTodo, getTodos, updateTodo, deleteTodo };
    
  
