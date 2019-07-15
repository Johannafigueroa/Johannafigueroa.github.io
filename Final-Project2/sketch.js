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
  ellipse(370,140,10,10);
  ellipse(10,10,10,10);
  ellipse(10,10,10,10);
  ellipse(10,10,10,10);
  ellipse(10,10,10,10);
  ellipse(10,10,10,10);
  ellipse(10,10,10,10);
  ellipse(10,10,10,10);
  ellipse(10,10,10,10);
  ellipse(10,10,10,10);
}
