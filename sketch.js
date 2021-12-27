var ball
function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,20,20);
  ball.shapeColor = "blue";
}

function draw()
{
  if (keyDown("right")){
    ball.velocityX = 5
  }
  background(30);
  drawSprites();
}




