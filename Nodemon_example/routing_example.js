/**
 * Routing : it refers to how an application's endpoint(urls)respond to client request.
 * routing using methods of the express app object that correspond to HTTP methods.
 * for example , app.get()to handle GET request and app.post() to handle POST requests.
 */

const express = require("express")
const Port = 9000
const app = express()

app.get("/", (req,res)=>{
    res.send("Welcome to node js")
})

app.get("/about", (req,res)=>{
    res.send("My About page")
})

app.listen(Port,(req,res)=>{
    console.log("server is running");
})