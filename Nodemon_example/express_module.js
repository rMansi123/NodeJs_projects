/** Epress is a framwork */
const express = require("express")
const Port = 9000
const app = express()

app.listen(Port,(req,res)=>{
    console.log("server is running");
})