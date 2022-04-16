
var trex ,trex_running,trex_collided;
var ground
function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
trex_collided=loadImage("trex_collided.png")
}

function setup(){
  createCanvas(600,200)
 trex=createSprite(200,100,50,50) 
  //create a trex sprite
 trex.addAnimation("run",trex_running)
 trex.scale=0.5
 trex.x=50
 ground=createSprite(300,180,600,20)
}

function draw(){
  background("magenta")
 
 // trex.velocityX =+5

if(keyDown("space")){
  trex.velocityY=-10
}
// adding gravity to trex
trex.velocityY=trex.velocityY+1
trex.collide(ground)


 drawSprites()
  
 





}
