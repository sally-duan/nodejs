// var http = require('http');
// http.createServer(function(req, res){
//     res.writeHead(200, {'content-type': 'text/plain'});
//     res.end('hello world \n');
// }).listen(1337, '127.0.0.1');

// const s1 = require('./s1');
// console.log (s1);

// const path = require('path');
// console.log(path.parse(__filename))
// console.log(path.parse(__dirname))
// const os= require('os');
// var totalMem = os.totalmem()
// var freememory = os.freemem();
// var user = os.userInfo();
// console.log(`Total memeory is ${totalMem} and  free mem is ${freememory}`)
// console.log(`user information is ${user.username + ' ' + user.uid}`);


// const fs= require('fs');
// var files = fs.readdirSync('./');
// console.log(files);
// files.forEach(e=> {
//     console.log(e)
// });

// var files_old = fs.readdir('./',function(err, data){
//     if (err) console.log("Error", err);
//     else 
//     console.log("the data is ", data);  
// })
const Logger = require('./s1');
const logger = new Logger();

logger.on('messageLogged', args =>{
    console.log('listener called', args);
})

logger.log('message');

// console.log(EventEmitter);

var http = require('http');
var server = http.createServer((req, response)=>
{
    if (req.url ==='/') 
    {
        response.write("hello world");
        response.end();
    }

    if (req.url==='/api/sallylearnmath')
    {
        response.write(JSON.stringify([1,2,3]));
        response.end();
    }
});nm
    
server.listen(3000);

console.log('listening on port 3000');