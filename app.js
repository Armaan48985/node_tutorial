// const os = require('os')
// const user = os.userInfo()

// // console.log(os.type());

// const {readFileSync, writeFileSync} = require('fs')

// const first = "hello"
// const second = "armaan"

// writeFileSync('./greeting', `Your Text : ${first} ${second} !`, {flag: 'z'})

const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("This is home page")
    }                               
    if(req.url === '/about'){
        res.end("this is about page")
    }                                
    
    res.end(`
        <h1>404 Error! Page Not Found</h1>
        <a href="/">Back to home page</a>
    `)
})

server.listen(3000)