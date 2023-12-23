/* 
javascript engine: which is used to convert javascript in to machine code
Node.js is a runtime environment that was created by ryan dahl in 2009
it is based on the v8 javascript engine and is designed to run outside of a web browser
what is npm : npm is a package manager for javascript programming language 
npm start fro node package Manager
statusCode: it represents the http status code of the response, indicating the outcome of the request (e.g, 200 for success, 404 for not fount , etcc)
statusMessage: it allows to provide a custom status message that corresponds to the status code. if not provided, a default message will be sent base on the satuts code.

Modules: collection of code , can be single file of collection of files or folders , can reduce our code and its provide reusability
        - Three type of modules in node 
            1. Core Module
            2. Local Module
            3. Third Paty Module
            
        1 --> core module 
        Fs Modules: file system module which is used to handle file
        - UTF-8 is a chatacter encoding system. it lets you represent characters as a ASCII text
            UTF: Unicode Transformation Format
        - we can perform Read,Write,Delete,Update,Rename
        - Difference between  readfile and readfilesync
            - readfile takes a call back which calls response.send,
            - fs.readfilesync, you need to be aware it does not take a callback so your callback which calls response.send will never get called

        2 --> Local module
        - local moduled are created loaclly 
        - inclued different functionalities of your application in separate filed and folderd
        - can also package it and distribute it via npm, so that node.js community can use it. we need module.exports to define wht could be access from other file
*/

console.log("hello");