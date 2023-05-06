const mongoose = require('mongoose')     //Third party module
const express = require('express')     //Third party module
const auth = require('./routes/autentication.js')
const app = express()
app.use(express.json())
require('dotenv').config();
mongoose.connect(process.env.link).then(()=>{
    console.log('succ')
}).catch((err)=>{
    console.log(err)
})

app.use("/api/auth",auth)
app.use("/api/user",booking)

app.listen(3000,(req,res)=>{
    console.log("Connected succesfully");
})