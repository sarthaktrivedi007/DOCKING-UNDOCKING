var image8 , image2 , image3 , image4 , image5 , image6
var iss , spacecraft , hasDocked
hasDocked = false;

function preload(){
  image8 = loadImage("Docking-undocking/images/iss.png")
  image2 = loadImage("Docking-undocking/images/spacebg.jpg")
  image3 = loadImage("Docking-undocking/images/spacecraft1.png")
  image4 = loadImage("Docking-undocking/images/spacecraft2.png")
  image5 = loadImage("Docking-undocking/images/spacecraft3.png")
  image6 = loadImage("Docking-undocking/images/spacecraft4.png")
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(image8)
  iss.scale = 0.25

  spacecraft = createSprite(385,300,50,50)
  spacecraft.addImage(image4)
  spacecraft.scale = 0.10

}

  

function draw() {

  background(image2);  
 
  if(!hasDocked){

    spacecraft.x = spacecraft.x + random(-1,1)

    if (keyDown("LEFT_ARROW") ){
      spacecraft.x = spacecraft.x-2
      spacecraft.addImage(image5)
    }

    if (keyDown("RIGHT_ARROW")){
      spacecraft.x = spacecraft.x +2
      spacecraft.addImage(image6)
    }

    if (keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y -2
      spacecraft.addImage(image4)
    }

    if (keyDown ("DOWN_ARROW")){
      spacecraft.addImage(image4)
    }
    
  }

  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){

    hasDocked = true
    textSize(25)
    fill("white")
    text("DOCKING SUCCESSFUL !",200,300)
  }

  



  drawSprites();
}

function keyPressed(){

}