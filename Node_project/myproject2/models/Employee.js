const mongoose = require("mongoose")

const EmployeeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    city :{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("employee",EmployeeSchema)