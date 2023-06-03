

let pEl = document.getElementById("color")
let btnEl = document.getElementById("btn-click")

btnEl.addEventListener("click", function(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background = `#${randomColor}`
    
    pEl.innerHTML = `#${randomColor}`
})