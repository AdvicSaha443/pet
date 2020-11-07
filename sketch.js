//Create variables here
var dog, dogimg, dog2;
var database;
var foodS, foodStock;

function preload()
{
  //load images here
  dogimg = loadImage("img/dogimg.png");
  dog2 = loadImage("img/dogImg1.png");
  
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value", readStock);

  dog = createSprite(250, 250, 20, 20);
  //dog.shapeColor = "red";
  dog.scale = 0.3;
  dog.addImage(dogimg);
  //dog.addImage(dog2);
  
  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(dog2);
  }
  
  
}


function draw() {  
  background("green");

  //dog.display();
  drawSprites();
  //add styles here
  fill("red");
  text("Note: Press Up Arrow Key To Feed Drago Milk", 150, 25);

}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {

  if(x<=0) {
    x=0;
  } else{
    x=x-1;
  }

  database.ref('/').update({
    Food: x
  })
}

