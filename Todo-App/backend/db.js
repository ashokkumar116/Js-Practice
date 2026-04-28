const mongoose = require("mongoose");


const connectToDb = async() =>{
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToDb
