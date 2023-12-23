const express = require("express")

const routes = express.Router()

const path = require("path")
const hbs = require("hbs")

// import schema from mongoose 
const employee = require("../models/Employee")
const registration = require("../models/registration")

let subjects = {
    languages : ["c++","java","python","#c","reactjs","nodejs"]
}

hbs.registerHelper("checkAge",(age,option)=>{
    if(age>18){
        return option.fn(this)
    }
    else{
        return option.inverse(this)
    }
})

hbs.registerHelper("uppwrCase",(name,option)=>{
    return name.toUpperCase();
})


//add employee in database
routes.get("/",async(req,res)=>{
    // res.render("index", {subject : "java"})

    const data = await employee.find()
    res.render("formpage",{data})
})

routes.post("/addEmployee",async(req,res)=>{
    console.log("---> button clicked");
    count = 1;
    console.log(req.body);
    const emp = employee(
        {
            name : req.body.name,
            subject:req.body.subject,
            city : req.body.city
        }
    )
    await emp.save()

    // get all data : 
    const result = employee.find()

    console.log(result);
    console.log("sucessfully data inserted ");
    res.redirect("/")
})

let count = 1;

hbs.registerHelper("count",()=>{
    return count ++;
})

routes.get("/edit/:id",async(req,res)=>{
    const editData = await employee.findById(req.params.id)
    res.render("edit",{editData})
})

routes.post("/update",async(req,res)=>{
    const result = await employee.findByIdAndUpdate(req.body.id,req.body)
    res.redirect("/")
})

routes.get("/delete/:id",async(req,res)=>{
    const deleteData = await employee.findByIdAndDelete(req.params.id)
    res.redirect("/")
})

routes.get("/registration",(req,res)=>{
    res.render("registration")
})

routes.post("/addregistration",async(req,res)=>{
    console.log(req.body);
    const reg = registration({
        name: req.body.name,
        city: req.body.city,
        state: req.body.state
    })
    await reg.save()
    res.render("registration")
})

routes.get("/home",(req,res)=>{
    // res.render("index", {subject : "java"})
    res.render("index",{age : req.query.age})
})

routes.get("/about",(req,res)=>{
    res.render("about", {key : subjects})
})

routes.get("/demo",(req,res)=>{
    res.render("demo", {key : subjects})
})

// let data = {
//     name : "Node",
//     framework :  "Express",
// }

// routes.get("/",(req,res)=>{
//     // res.send("welcome to home") //show statically
//     // res.sendFile(path.join(__dirname,"../views/index.html")) //show content dynamically 
//     res.render("index",{key : data}) //render data to the page
// })

// routes.get("/about",(req,res)=>{
//     res.sendFile(path.join(__dirname,"../views/about.html"))
// })

// routes.get("*",(req,res)=>{
//     res.sendFile(path.join(__dirname,"../views/404.html"))          //show erorr message page when path is not found. * for universal path that not define
// })

module.exports = routes
// export default routes