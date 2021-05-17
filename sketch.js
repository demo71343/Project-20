var backgrnd;
var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;



function preload() {
    //load the images here
    backgrnd = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
 
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,650,20,20);
    cat.addAnimation("cat sitting",catImg1);
    cat.scale=0.18;

    mouse = createSprite(200,650,20,20);
    mouse.addAnimation("mouse sitting",mouseImg1);
    mouse.scale=0.2;
}

function draw() {

    background(backgrnd);
    //Write condition here to evalute if tom and jerry collide
    console.log("Outside if conditiion")
    if(cat.x-mouse.x < (cat.width-mouse.width)/2){

        cat.velocityX = 0;
        cat.addAnimation("LastImageCat",catImg3);
        cat.x = 320;
        cat.scale=0.2;
        cat.changeAnimation("LastImageCat");

        console.log("Inside if conditiion")
        
        
        

        mouse.changeAnimation("MouseLastImage",mouseImg3);
        mouse.changeAnimation("MouseLastImage");
        mouse.scale = 0.17;
        
        
        

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){

    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;

    cat.velocityX = -3;
    cat.addAnimation("catWalking",catImg2);
    cat.changeAnimation("catWalking");

  }


}
