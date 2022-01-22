var btn = document.querySelector("button")
var txt =document.querySelector("p")
var img =document.querySelector("img")

btn.addEventListener("click" ,function clickActive(){

    if (btn.textContent == "Start Machine"){
        btn.textContent ="Stop Machine"
        txt.textContent = "Machine Started"
        img.src =" img/moving.gif"
    

    }
    else {
        btn.textContent="Start Machine"
        txt.textContent = "The Machine is Stopped"
        img.src ="img/stopped img.png"

    }
} )




