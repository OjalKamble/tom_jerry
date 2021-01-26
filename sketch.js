var tom,t1,jerry,j1;
var garden,gardenImg;
var cat2,catImg2;
var cat4,catImg4;
var mouse4,mouse4IMg

function preload() {
    //load the images here
t1=loadImage("cat1.png");
gardenImg=loadImage("garden.png");
j1=loadImage("mouse2.png");
catImg2=loadImage("cat2.png")
catImg4 = loadImage("cat4.png")
mouse4IMg = loadImage("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden = createSprite(500,400)
garden.addImage("garden",gardenImg)

tom = createSprite(750,650)
tom.addImage("cat",t1)
tom.scale = 0.1;
tom.debug = true
tom.setCollider("rectangle",0,0,700,700)
jerry = createSprite(100,650)
jerry.addImage("mouse",j1)
jerry.scale = 0.1
jerry.setCollider("rectangle",0,0,700,700)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.isTouching(jerry)){
        jerry.addAnimation("mouse",mouse4IMg)   
        tom.addAnimation("cat",catImg4)
    tom.velocityX = 0
    }
    
    
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown("left") ){
tom.velocityX = -6
tom.addAnimation("cat",catImg2);
}
if( keyWentUp("up")){
tom.velocityX = 0;
tom.addAnimation("catImg")
}

}
