var big, small;
var go1, go2, go3, go4;
var object1, object2;
function setup() {
  createCanvas(800,400);
  big = createSprite(400, 200, 50, 50);
  small = createSprite(200, 200, 30, 30);

  go1 = createSprite(100, 100, 50, 50);
  go1.shapeColor = "green";

  go2 = createSprite(200, 100, 50, 50);
  go2.shapeColor = "green";

  go3 = createSprite(300, 100, 50, 50);
  go3.shapeColor = "green";

  go4 = createSprite(400, 100, 50, 50);
  go4.shapeColor = "green";


  big.shapeColor="green";
  small.shapeColor="green";

  big.velocityX=-5;
  small.velocityX=5;
}
 
function draw() {
 
  

  background(0); 
  console.log(big.x-small.x)
  /*big.x=World.mouseX;
  big.y=World.mouseY; */
 /* if(isTouching(big, go2))
  {                                        
    big.shapeColor="lime";
    go2.shapeColor="lime";
      }
  else{
    big.shapeColor="green";
    go2.shapeColor="green";
  }*/

  drawSprites();
  bounceOff(big, small);                                          
}

function isTouching(object1, object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2 && 
    object2.x-object1.x<object1.width/2+object2.width/2 
    && object1.y-object2.y<object1.height/2+object2.height/2
     && object2.y-object1.y<object2.height/2+object1.height/2){
   return true;
  }
  else{
   
   return false;  
    
  }

}

function bounceOff(object1, object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2 && 
    object2.x-object1.x<object1.width/2+object2.width/2){
      object1.velocityX=object1.velocityX*(-1);
      object2.velocityX=object2.velocityX*(-1);
    }
    if(object1.y-object2.y<object1.height/2+object2.height/2
      && object2.y-object1.y<object2.height/2+object1.height/2){
        object1.velocityY=object1.velocityY*(-1);
        object2.velocityY=object2.velocityY*(-1);
      }

}


 

