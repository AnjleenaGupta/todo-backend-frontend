
const express = require("express");
const cors =require("cors");
const path = require("path");
const mongoose =require("mongoose");
const todoRoutes = require("./routes/todoRoutes");
require("dotenv").config()
const app = express();
app.use(cors());

app.use(express.json());
app.use((req,res,next)=>{
  const now = new Date().toISOString();
  console.log(`[${now}]${req.method}${req.url}`);
  next();
});
app.use(express.static("public"));
app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname,"public","index.html"));
});
const MONGO_URI= process.env.MONGO_URI;
const PORT = process.env.PORT||8000;
mongoose
.connect(MONGO_URI)
.then(()=>{
  console.log("connected to mongodb");
})
.catch((err)=>{
  console.log("mongo db connection error",err);
})
app.use("/api/todos", todoRoutes);



app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});