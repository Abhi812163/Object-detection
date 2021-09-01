img="";

function setup(){
    canvas=createCanvas(640,480);
    canvas.center();
}

function preload(){
    img=loadImage('dog_cat.jpg');
}

function draw(){
    image(img,0,0,640,480);
    fill('#1fab38');
    text("Dog",70,65);
    noFill();
    stroke('#1fab38');
    rect(50,70,550,380);
}