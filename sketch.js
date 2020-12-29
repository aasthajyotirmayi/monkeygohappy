
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score, ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300);

  monkey = createSprite(70,215,10,10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(300,250,600,10);
  
  score = 0;
}


function draw() {
  background("white");
  
  score = Math.ceil(frameCount/frameRate());
  stroke("black");
  textSize(15);
  text("Survival Time: "+ score,250,50);
  
  if(keyDown("space") && monkey.y >=200) {
    monkey.velocityY = -15;
  }
  
  spawnBananas();
  spawnObstacle();
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);

  drawSprites();
}

function spawnBananas() {
  if (frameCount % 80 === 0) {
    banana = createSprite(600,150,10,10);
    banana.y = Math.round(random(60,150));
    banana.addImage(bananaImage);
    banana.scale = 0.1;

    banana.velocityX = -5;
    banana.lifetime = 130;
    
    //bananaGroup.add(banana);
  }
}

function spawnObstacle() {
  if (frameCount % 100 === 0) {
    obstacle = createSprite(600,216,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;

    obstacle.velocityX = -5;
    obstacle.lifetime = 130;
    
    //obstacleGroup.add(obstacle);
  }
}


