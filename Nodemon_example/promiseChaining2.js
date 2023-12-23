//prominse multiple threading 
// it will not carryforward response like promise chaining 

const waitingResult = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10)
    },2000)
})

waitingResult.then((res)=>{
    console.log('res',res*10);
})

waitingResult.then((res)=>{
    console.log('res',res*20);
})

waitingResult.then((res)=>{
    console.log('res',res*8);
})