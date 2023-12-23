// allowing us to handle the result of an asynchronous task once it has completed or throw an error 
// promise are used in ES8 async function

let num1 = 10
let num2 = 20

console.log('proccess num1',num1);
console.log('proccess num2',num2);

const waitingResult  = new Promise((resolve,reject)=>{
    setTimeout(() => {
        num1+=100
        num2+=200
        resolve([num1,num2]) //it will send to next proccess and want to send more para then use array
    }, 2000);
})

waitingResult.then((res)=>{
    console.log('resolve promise addition ',res[0] + res[1]); // proform the logic with their index if para are more than one
})