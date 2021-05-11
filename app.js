//1
const express = require("express")
app = express()
port = 2000
app.use(express.json());

//2
const todos = [{ todo: "wake up", isCompleted: false }, { todo: "Eat Breakfast", isCompleted: false }];

//3
app.get("/todos",(req,res)=>{
    res.status(200);
    res.send(todos);
})

//4
app.post("/create/todo",(req,res)=>{
    const newTodo={todo:req.body.todo,isCompleted:req.body.isCompleted}
    todos.push(newTodo);
    res.status(201);
    res.json(newTodo)
})