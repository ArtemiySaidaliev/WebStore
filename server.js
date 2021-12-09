let http=require('http')
let static=require('node-static')
let url=require('url')
let file=new static.Server('./public')

function accept(req,res){
    let urlParsed=url.parse(req.url,true).pathname
    let urlObj=url.parse(req.url,true)
    if(urlParsed=='/articles'){
        res.end('We have: long ski,medium ski, short ski, snowboard red, snowboard blue, snowboard yellow and helmet')
    }
    if(urlParsed=='/available'){
        let messge = urlObj.query.messge
        if(messge.category == 'ski'){
            res.end('Available: long ski, short ski')
        }
        if(messge.category == 'snowboard'){
            res.end('Available: snowboard blue')
        }
        if(messge.category == 'helmet'){
            res.end('helmets out of stock')
        }
        else{
            res.end('something wrong!')
        }
    }
    else{file.serve(req,res)}
}
http.createServer(accept).listen(8083)