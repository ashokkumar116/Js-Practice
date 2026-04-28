const express = require("express");
const connectToDb = require("./db");
require("dotenv").config();
const todoRoutes = require("./routes/todo.routes"); 

const app = express();

app.use(express.json());

app.use("/api/todos",todoRoutes)
// app.use("/api/auth",authRoutes)

app.get('/',(req,res)=>{
    res.send("Server is running")
})

const port = process.env.PORT || 5000

app.listen(port,()=>{
    connectToDb();
    console.log(`Server is running on ${port}`);
})
