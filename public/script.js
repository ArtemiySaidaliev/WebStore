let skiBtn = document.getElementById("skiBtn")
let startBtn = document.getElementById("startBtn")
let boardBtn = document.getElementById("boardBtn")
let gearBtn = document.getElementById("gearBtn")
skiBtn.addEventListener('click', function(){
    alert('Ski')
})
startBtn.addEventListener('click', function(){
    let xhr = new XMLHttpRequest()
    xhr.open('GET','/articles',true)
    xhr.onreadystatechange = function(){
        if (xhr.readyState != 4) return content.innerHTML.responseText
    }
    xhr.send()
})
boardBtn.addEventListener('click', function(){
    alert('board')
})
gearBtn.addEventListener('click', function(){
    alert('gear')
})