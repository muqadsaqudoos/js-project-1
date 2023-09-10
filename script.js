const button = document.querySelector(".btn")
const body = document.querySelector("body")
const color = ['red','blue','green','yellow','orange','darkgrey','pink','purple','black']
body.style.background = "white"

button.addEventListener('click',changebackground)

function changebackground() {
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.background = color[colorIndex]
}