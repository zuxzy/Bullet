var bullet, bulletImage
var weight, speed, damage
var wall, width

function preload(){
  buletImage = loadAnimation("bullet")
}

function setup() {
  createCanvas(1900,200);

  bullet = createSprite(80, 100);
  bullet.addAnimation("looks", bulletImage);
  bullet.scale = 0.1;

  weight = prompt("Input car weight");
  speed = prompt("Input car speed");
  width = prompt("Input wall width");

  wall = createSprite(1900 - (width*10)/2, 100, width*10, 200)
  wall.shapeColor = "white";

  damage = (0.5*weight*speed*speed)/((width*10)^3)
  
  alert("Test Will Start");

  bullet.velocityX = speed/5;
}

function draw() {
  background("black");

  if(bullet.isTouching(wall)){
    bullet.velocityX = 0;
    if(damage > 10){
      wall.shapeColor = "red";
    }
    if((damage < 10) && (damage > 5)){
      wall.shapeColor = "yellow";
    }
    if(deformation < 5){
      wall.shapeColor = "green";
    }
  }

  drawSprites();
}
