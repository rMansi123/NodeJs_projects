// set -exicutionpolicy unrestricted 
/*
    package.json : is a main configuration file of the application, manifest file of the project which is conatain all the info of the project
                   #npm init or #npm init -y it use for generate the package.json file
    Callstack : is a mechanism used by programming language to keep track of the execution of function or methods.
            -    when a fun is called , it is added to the top of the call satck, and whenn it returns, it is remove all the stack.
            -   the call stack is impo because it ensure that the program executes in the correct order and that each function completes before the next one starts.
*/

const http = require("http");

http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"application\json"})
    const objData = {subject:"node",Database:"mongose"}
    res.write(JSON.stringify(objData))
    res.end()
}).listen(9001)