import dotenv from "dotenv";
dotenv.config();
import { app } from "./app.js";


import { DB_NAME } from './constants.js'
import connectDB from "./db/index.js";

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server listening at port ${process.env.PORT}`);
        
    })
})
.catch((error)=>{
    console.log("MONGODB connection failed !!!",error);
})












/*
import mongoose from "mongoose";
import express from "express"
const app=express();

;( async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("error",error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App listening on port : ${process.env.PORT}`)
        })
    }catch(error){
        console.error("Error",error)
        throw error;
    }
})()
*/

