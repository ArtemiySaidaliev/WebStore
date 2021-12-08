let http=require('http')
let static=require('node-static')
let url=require('url')
let file=new static.Server('./public')
function accept(req,res){
    let urlParsed=url.parse(req.url,true).pathname
    if(urlParsed=='/articles'){
        res.end('Товар!')
    }
    if(urlParsed=='/available'){
        res.end(' Доступный Товар!')
    }
    else{file.serve(req,res)}
}
http.createServer(accept).listen(8083)