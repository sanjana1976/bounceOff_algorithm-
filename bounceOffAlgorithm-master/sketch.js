var fixedRect, movingRect, ob1,ob2,ob3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ob1= createSprite(100,100,50,50);
  ob2= createSprite(200,100,50,50);
  ob3= createSprite(300,100,50,50);
  
}

function draw() {
  background(0,0,0);  
  movingRect.x= World.mouseX;
  movingRect.y= World.mouseY;

  

  if(isTouching(movingRect,ob1))
  {
movingRect.shapeColor= "red";
ob1.shapeColor= "red";
  }
  else{
    movingRect.shapeColor= "green";
    ob1.shapeColor= "green"; 
  }
  drawSprites();
}
