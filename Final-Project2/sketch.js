let img;

function setup() {
  createCanvas(720, 400);
  img = loadImage('bru.jpg');
}

function draw() {
  mapoof();
}
function mapoof(){
  image(img, 0, 0, img.width / 4, img.height / 4);
  noStroke();
  fill('red');
  //Indiana
  ellipse(370,140,10,10);
  //Vermont
  ellipse(480,60,10,10);
  //New Hampshire
  ellipse(490,70,10,10);
  //West Virginia
  ellipse(390,145,10,10);
  //Connecticut
  ellipse(10,10,10,10);
  //Wisconsin
  ellipse(10,10,10,10);
  //Rhode Island
  ellipse(10,10,10,10);
  //Ohio
  ellipse(10,10,10,10);
  //Pennsylvania
  ellipse(10,10,10,10);
  //New York
  ellipse(10,10,10,10);
}
