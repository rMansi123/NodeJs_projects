const { log } = require("console")
const fs = require("fs")

// fs.readFile("myText.txt","utf-8",function(err,data){
//     if (err) throw err
//     console.log(data);
// })

// fs.writeFile("demoWriteFile","Welcom to my first file",function(){
//     console.log("file created successfully");
// })

// fs.appendFile("demoWriteFile.txt"," How are you!?",function(){
//     console.log("success");
// })

// fs.open("blankFile.txt","w",function(){             // w(write) - for operation
//     console.log("success");
// })

// fs.unlink("blankFile.txt",(err) => {            //unlink - delete file
//     if(err) throw err
//     console.log("deleted");
// })

fs.rename("demoWriteFile","newName.txt",function(){
    console.log("renamed..!!");
})