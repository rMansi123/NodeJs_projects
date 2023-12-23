/**
 * function waitingrespons(){
 * 
 * }
 * const res = waitingRespons()
 * console.log(res)
 * 
 * output: undefined (by default function expecting return value if it does not return anything it display undefined)
 * 
 * await makes sure to wait till a promise is settled br it resolved or rejected.
 * we write then() for handling promise so far, now we have "await", so, now we can remove then() and replace it with "await"
 * await should be used in async function
 * 
 */

// async function waitingRespons ()
// {
//     // return 0 // output: promise { 0 } (resolve)
//     throw new Error('something went wrong') // throw error (revoke)
// }

// const res = waitingRespons()
// console.log(res);


const square = (num) => {
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            resolve(num*num)
        },2000)
    })
}

// square(5).then((num)=>{
//     console.log(num);
// })  //without async await

// async function displayResult(){
//     var res = await square(5)
//     return console.log(res);
// } 

async function displayResult(){
    var res = await square(5)
    console.log(res);
    var res1 = await square(res)
    console.log(res1);
    var res2 = await square(res1)
    console.log(res2);
} // with multiple threads (async await chaining)

displayResult()