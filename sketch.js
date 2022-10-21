var canvas;
var backgroundImage, car1_img, car2_img,car3_img,car4_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var gameState = 0;
var form, player, playerCount;
var car1, boot, fuels, powerCoins, obstacles;
var blastImage;

var intro, pista;


function preload() {
  backgroundImage = loadImage("assets/planodefundo.png");
  car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  car3_img = loadImage("assets/car3.png");
  car4_img = loadImage("assets/car4.png");
  track = loadImage("assets/pist.png");
  fuelImage = loadImage("assets/fuel.png");
  powerCoinImage = loadImage("assets/goldCoin.png");
  obstacle1Image = loadImage("assets/obstacle1.png");
  obstacle2Image = loadImage("assets/obstacle2.png");
  lifeImage = loadImage("assets/life.png");
  blastImage = loadImage("assets/blast.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
 

  player = createSprite(width/2,camera.position.y+500,400,20);
  player.addImage("player",car1_img);
  player.scale=0.07
  

  intro = new Form();
  
}

function draw() {
  background(backgroundImage);
  if (gameState === 0) {
  
    intro.display();

  }

  if (gameState === 1) {

    
    bootGame();
    
    image(track, 0, -height * 5, width, height * 6);

    if(keyDown(UP_ARROW)) {
      player.velocity.y = -8;
    }
    if(keyDown(RIGHT_ARROW)) {
      player.velocity.x = 8;
    }
    if(keyDown(LEFT_ARROW)) {
      player.velocity.x = -8;
    }
    
   
  
    
    
  }

  if (gameState === 2) {
    
  }

  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function bootGame() {
  if (frameCount % 70 === 0) {
    boot = createSprite(random(width - 1400,width - 600), random(height - 100,height + 100));
    //boot.addImage("car1", car2_img);
   
    boot.scale = 0.07;
    //boot.addImage("blast", blastImage);
    boot.velocity.y = -5;

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: boot.addImage(car2_img);
              break;
      case 2: boot.addImage(car3_img);
              boot.scale = 0.9;
              break;
      case 3: boot.addImage(car4_img);
              boot.scale = 0.9;
              break;
      default: break;
    }
  }
   

  
  
}
