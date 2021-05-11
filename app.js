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

//5
app.put("/update/todo/:name", (req, res) => {
    const name = req.params.name
    let i1 = 0
    let foundit = todo.find((elem, i) => {
        i1 = i
        return elem.todo === name
    })
    if (name) {
        foundit = { todo: req.body.todo, isCompleted: req.body.isCompleted }
        todo.splice(i1, 1, foundit)
        res.status(200)
        res.json(foundit)
    } else {
        res.status(404);
        res.json("Todo not foundit");
    }
})



//6
app.delete("/delete/todo/:name", (req, res) => {
    const name = req.params.name
    let x = 0
    const foundit = todos.find((elem, i) => {
        x = i
        return elem.todo === name
    })
    if (foundit) {
        todos.splice(x, 1)
        res.status(200)
        res.json(foundit)
    } else {
        res.status(404);
        res.json("Todo not foundit");
    }
})


app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})