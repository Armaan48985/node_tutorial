// const os = require('os')
// const user = os.userInfo()

// const { read } = require('fs')

// // console.log(os.type());

// const {readFileSync, writeFileSync} = require('fs')

// const first = "hello"
// const second = "armaan"

// writeFileSync('./greeting', `Your Text : ${first} ${second} !`, {flag: 'z'})
const {readFile, writeFile} = require('fs').promises

const calling = async () => {
    try{
        const firstText = await readFile('./content/first.txt', 'utf8')
        const secondText = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/sabo-file.txt', `Sabo is ${firstText}'s and ${secondText}'s brother`)

        console.log(first, second)
    }
    catch(error){
        console.log(error)
    }
}
// const http = require('http')

// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.end("This is home page")
//     }                               
//     if(req.url === '/about'){
//         res.end("this is about page")
//     }                                
    
//     res.end(`
//         <h1>404 Error! Page Not Found</h1>
//         <a href="/">Back to home page</a>
//     `)
// })

// server.listen(3000)