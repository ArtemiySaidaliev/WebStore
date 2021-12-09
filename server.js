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
        let message = urlObj.query.message
        if(message.type == 'ski'){
            res.end('Available: long ski, short ski')
        }
        if(message.type == 'snowboard'){
            res.end('Available: snowboard blue')
        }
        if(message.type == 'helmet'){
            res.end('helmets out of stock')
        }

    }
    else{file.serve(req,res)}
}
http.createServer(accept).listen(8083)