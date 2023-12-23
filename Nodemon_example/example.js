
var months = process.argv

console.log('months',months);

const Waitingdays = new Promise((resolve, revoke) => {
    let days = months[2] * 30;
    resolve(days)
})
 
Waitingdays.then((days)=>{
    console.log(days);
})