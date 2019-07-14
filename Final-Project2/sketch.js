var img = document.createElement("img");
function setup() {
  var canvas = createCanvas(800, 400);
  canvas.parent('patrick-stump');
	img = loadImage('bru.jpg');
   noStroke();
} 
img.src = "https://i.ytimg.com/vi/XrWuFUSELrg/maxresdefault.jpg";
var src = document.getElementById("x");
 
src.appendChild(img);
function draw()
{
    mapoof(); 
    drawCircle();
    drawFace();
    if (mouseX > width/1.1) {
      background('black');
     drawAJR();
     
}

function drawCircle()
{   noStroke();
    fill('blue');
    background('black');
    ellipse(mouseX, mouseY, 30, 30);

  }
    
}

function drawFace()
{
    noStroke();
    fill(229, 194, 152);
    ellipse(775, 200, 100, 200);
    triangle(720, 185, 730, 160, 725, 185);
    fill('black');
    ellipse(725, 235, 50, 50);
    ellipse(765, 150, 10, 20);
}
function mapoof(){
	image(img, 0, 0, img.width / 4, img.height / 4);
  noStroke();
  fill('red');
  ellipse(10,10,10,10);
}

function drawAJR(){
 stroke('white');
    line(300,100,505,320);
    line(505,100,300,320);
    textSize(32);
    fill('yellow');
    textFont('Helvetica');
    text('a 100 bad days make a 100 good stories',10,60);
}
