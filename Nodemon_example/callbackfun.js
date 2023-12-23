// allows a function to call another function
// it can run after another function has finished

const add=(num1,num2) => {
    return num1 + num2
}

const  sencond=(result,callback)=>{
    return result*callback(10,20)
}

console.log('callback',sencond(100,add));