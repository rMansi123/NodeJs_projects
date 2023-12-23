/**
 * req.query : it is a request that found in a URL
 * these query strings are in key-value from.
 * they start after the question mark in any url.
 * and if there are more than one, they are separated with the &. 
 * Rout Path = /name=mansi&subject=node
 * Request URL = http://localhost:9000/name=mansi&subject=node
 * req.query = {name:"mansi",subject:"Node"}
 */

const express = require("express")
const app = express()
const Port = 9000

// get the value using query
app.get("/about",(req,res)=>{
    let nameVal = req.query.name
    let marksVal = req.query.marks

    // res.send("name = "+nameVal+"marks = "+marksVal)
    res.json({
        nameVal,marksVal
    })
})

//get value using params
app.get("/delete/:id",(req,res)=>{
    let idVal = req.params.id
    res.send("deleted val = "+idVal)
})

//get multiple params
app.get("/profile/:id/:firstName",(req,res)=>{
    let idVal = req.params.id
    let nameVal = req.params.firstName

    res.send("profile of "+idVal+"fistnaem is "+nameVal)
})
        //second method
        app.get("/profile/:id/:firstName",(req,res)=>{
            let idVal = req.params["id"]
            let nameVal = req.params["firstName"]

            res.send("profile of "+idVal+"fistnaem is "+nameVal)
        })


app.listen(Port,(req,res)=>{
    console.log("server is running");
})