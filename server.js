let http=require('http')
let static=require('node-static')
let url=require('url')
let file=new static.Server('./public')
function accept(req,res){
    let urlParsed=url.parse(req.url,true)
    if(urlParsed.pathname=='/echo'){
        res.end(urlParsed.query.massage)
    }
    else{file.serve(req,res)}
}
http.createServer(accept).listen(8083)