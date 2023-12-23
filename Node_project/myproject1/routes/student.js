import express from "express"

const routes = express.Router()

routes.get("/student/all",(req,res)=>{
    res.send("all student")
})

// module.exports = routes
export default routes