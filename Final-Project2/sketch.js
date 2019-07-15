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
  ellipse(365,140,10,10);
  //Vermont
  ellipse(480,60,10,10);
  //New Hampshire
  ellipse(492,70,10,10);
  //West Virginia
  ellipse(420,155,10,10);
  //Connecticut
  ellipse(489,95,10,10);
  //Wisconsin
  ellipse(330,80,10,10);
  //Rhode Island
  ellipse(499,95,10,10);
  //Ohio
  ellipse(400,140,10,10);
  //Pennsylvania
  ellipse(450,185,10,10);
  //New York
  ellipse(460,75,10,10);
}
