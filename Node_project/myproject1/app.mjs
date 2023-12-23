import express from "express"
import student from "./routes/student.js"

const app = express()
const PORT = 9000

app.use("/careerCenter",student)

app.listen(PORT,()=>{
    console.log("serever is running");
})