// allowing us to handle the result of an asynchronous task once it has completed or throw an error 
// promise are used in ES8 async function

let num1 = 10
let num2 = 20

console.log('proccess num1',num1);
console.log('proccess num2',num2);

const waitingResult  = new Promise((resolve,reject)=>{
    setTimeout(() => {
        num1+=100
        resolve(num1)
    }, 2000);
}).then((res)=>{
    console.log('res 2',res);
    return res*10
}).then((res)=>{
    console.log('res 3',res);
    return res*20
}).then((res)=>{
    console.log('res 4',res);
    return res*30
})
