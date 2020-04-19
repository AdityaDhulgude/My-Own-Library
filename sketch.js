var movingRect, fixedRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 80);
  movingRect=createSprite(400, 200, 80, 30);
  fixedRect.shapeColor="Red";
  movingRect.shapeColor="Red";
}

function draw() {
  background(0);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouching(movingRect, fixedRect))
  {
    fixedRect.shapeColor="Blue";
    movingRect.shapeColor="Blue";
  }
  else
  {
    fixedRect.shapeColor="Red";
    movingRect.shapeColor="Red";
  }

  drawSprites();
}
