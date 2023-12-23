let num1 = 10
let num2 = 20

console.log('num1=',num1);
console.log('num2=',num2);

setTimeout(()=>{
    num1+= 100
    num2+= 200
    console.log('proccess num1 =',num1);
    console.log('proccess num2 =',num2);
},2000)

console.log('addition :',num1+num2);

