var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var survivalTime=0

function preload(){
  
  
      monkey_running= loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(80,315,20,20)
 monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  drawSprites()
  
  obstacleGroup=new Group()
  bananaGroup=new Group()
}


function draw() {
background(200)
  
   
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  
  
  if(ground.x<0){
  ground.x=ground.width/2;  
  }
  if(keyDown("space")){
    monkey.velocityY=-10
  }
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,100,50)
  
  drawSprites()
  Food()
  obstacles()
}


function Food(){
  if(World.frameCount%60===0){
    banana=createSprite(400,200,20,20);
    banana.velocityX=-8
  banana.setLifetime=50;
    banana.y=Math.round(random(10,250))
    banana.addImage(bananaImage)
    banana.scale=0.1
  }
  
  drawSprites()
}

function obstacles(){
  if(World.frameCount%200===0){
    obstacle=createSprite(400,315,20,20);
    obstacle.velocityX=-8
  obstacle.setLifetime=50;
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.2
  }

  drawSprites()
}




