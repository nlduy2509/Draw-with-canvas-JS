const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");
var z = 10;

ctx.fillStyle = "red";

let flag = false;

function draw(x,y){
    const circle = new Path2D();
    circle.arc(x,y,z,0,2*Math.PI);
    ctx.fill(circle);
}

canvas.addEventListener("mousedown",function(e){
    flag = true;
    const{clientX,clientY} = e;
    const react = canvas.getBoundingClientRect();
    draw(clientX - react.left,clientY - react.top);
})

canvas.addEventListener("mouseup",function(e){
    flag = false;
})

canvas.addEventListener("mousemove",function(e){
    if(flag){
        const{clientX,clientY} = e;
        const react = canvas.getBoundingClientRect();
        draw(clientX - react.left,clientY - react.top);
    }
})

const color = [...document.querySelectorAll(".color-packer")]
color[0].addEventListener("click",function(){
    ctx.fillStyle = "red"
})
color[1].addEventListener("click",function(){
    ctx.fillStyle = "yellow"
})
color[2].addEventListener("click",function(){
    ctx.fillStyle = "green"
})
color[3].addEventListener("click",function(){
    ctx.fillStyle = "black"
})
color[4].addEventListener("click",function(){
    ctx.fillStyle = "orange"
})
color[5].addEventListener("click",function(){
    ctx.fillStyle = "blue"
})

const btn_clear = document.getElementById("btn-clear");
btn_clear.addEventListener("click",function(){
    ctx.clearRect(0,0,600,600)
})

const btn_eraser = document.getElementById("btn-eraser");
btn_eraser.addEventListener("click",function(){
    ctx.fillStyle = "white"
})

const num = document.getElementById("num");
num.addEventListener("change",function(){
    z = num.value
})



