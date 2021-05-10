//1
const express = require("express")
app = express()
port = 2000
app.use(express.json());

//2
const todos = [{ todo: "wake up", isCompleted: false }, { todo: "Eat Breakfast", isCompleted: false }];

