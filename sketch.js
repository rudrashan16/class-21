var fixRect, moveRect;
var object1,object2,object3,object4;
function setup() {
  createCanvas(1200,1200);
  
  object1 = createSprite(800,200,50,50);
  object1.shapeColor = "orange";

  object2 = createSprite(200,100,50,50);
  object2.shapeColor = "orange";

  object3 = createSprite(300,100,50,50);
  object3.shapeColor = "orange";

  object4 = createSprite(400,100,50,50);
  object4.shapeColor = "orange";

  fixRect = createSprite(200, 200, 50, 80);
  fixRect.shapeColor =  "yellow";
  fixRect.velocityX = 5;
 
  moveRect = createSprite(400,200,80,30);
  moveRect.shapeColor =  "yellow";
  moveRect.debug = true;
  moveRect.velocityX = -5;
}

function draw() {
  background(0);  
 
  moveRect.x = World.mouseX;
  moveRect.y = World.mouseY;

  /*if(isTouching(moveRect,object1)){
    moveRect.shapeColor = "blue";
    object1.shapeColor = "blue";
    
  }
 else{
  moveRect.shapeColor = "green";
  object1.shapeColor = "green";
 }*/
bounceOff(object1,fixRect);

  drawSprites();
}
  