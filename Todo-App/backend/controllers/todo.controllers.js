const Todos = require("../models/Todos");



const createTodo = async(req,res)=>{
    try {
        const reqtext = req.body.text;
        const newTodo = new Todos({
            text: reqtext
        })
        await newTodo.save();

        res.status(201).json({message:"Todo created successfully",newTodo})
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
}


const readTodos = async(req,res)=>{
    try {
        // const todoId = req.params.id;
        const todos = await Todos.find();
        res.status(200).json({message:"Todos fetched successfully",todos});
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
}

// axios.post("http://localhost:3000/api/todos/create-todo",{text:"My Task"})


module.exports = {createTodo,readTodos}