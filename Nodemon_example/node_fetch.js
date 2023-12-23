// const fetch = require('node-fetch')

const url = 'https://jsonplaceholder.typicode.com/posts/1'

fetch(url).then((res)=> res.json()).then((json)=> console.log(json))