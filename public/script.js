let skiBtn = document.getElementById("skiBtn")
let boardBtn = document.getElementById("boardBtn")
let gearBtn = document.getElementById("gearBtn")
let startBtn = document.getElementById("startBtn")
skiBtn.addEventListener('click', function(){
    alert('Ski')
    let xhr = new XMLHttpRequest()
    let message = {
        "type" : "ski"
    }
    xhr.open('GET','/available?message=' + JSON.stringify(message),true)
    xhr.onreadystatechange=function(){
        if(xhr.readyState != 4)return
        alert(xhr.responseText)
    }
    xhr.send()
})

boardBtn.addEventListener('click', function(){
    alert('Snow board')
    let xhr = new XMLHttpRequest()
    let message = {
        "type" : "snowboard"
    }
    xhr.open('GET','/available?message=' + JSON.stringify(message),true)
    xhr.onreadystatechange=function(){
        if(xhr.readyState != 4)return
        alert(xhr.responseText)
    }
    xhr.send()
})

gearBtn.addEventListener('click', function(){
    alert('Snow board')
    let xhr = new XMLHttpRequest()
    let message = {
        "type" : "helmet"
    }
    xhr.open('GET','/available?message=' + JSON.stringify(message),true)
    xhr.onreadystatechange=function(){
        if(xhr.readyState != 4)return
        alert(xhr.responseText)
    }
    xhr.send()
})

startBtn.addEventListener('click', function(){
    let xhr = new XMLHttpRequest()
    xhr.open('GET','/articles',true)
    xhr.onreadystatechange=function(){
        if(xhr.readyState != 4)return
        alert(xhr.responseText)
    }
    xhr.send()
})