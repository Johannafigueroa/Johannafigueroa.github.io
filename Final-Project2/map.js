let img;

function setup() {
  createCanvas(720, 400);
  img = loadImage('e4d769742a76da9dba84a36ca541413f.jpg');
}

function draw() {
  image(img, 0, 0, img.width / 4, img.height / 4);
  noStroke();
  fill('red');
  ellipse(10,10,10,10);
}
