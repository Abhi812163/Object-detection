img="";
status="";

function setup(){
    canvas=createCanvas(640,480);
    canvas.center();

    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";
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

    fill('#1fab38');
    text("Cat",320,100);
    noFill();
    stroke('#1fab38');
    rect(280,100,330,380);
}

function modelLoaded(){
    console.log("COCOSSD is initialized");
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}