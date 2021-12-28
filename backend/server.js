const app = require("./app");
const express = require("express");
const dotenv =require("dotenv");

const connectDatabase = require("./config/database")
const path = require("path")
//Config

dotenv.config({path:"backend/config/config.env"});

//Connecting to database

__dirname=path.resolve();
if (process.env.NODE_ENV==='production'){
app.use(express.static(path.join(__dirname,'/frontend/build')));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
})
}else{
    app.get("/", (req,res)=>{
        res.send("API is running");
    });
}

connectDatabase()

app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})