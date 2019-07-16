let img;

function setup() {
  createCanvas(720, 400);
  img = loadImage('bru.jpg');
}

function draw() {
  mapoof();
  fill('black');
   //Indiana Dot
    if (mouseX >= 360 && mouseX <= 370 && mouseY >= 135 && mouseY <= 145){
    textSize(10);
    text('Indiana: Percent of children with elevated lead levels: 0.54% / Toxic chemicals: 153,044,979 lbs / Pounds of chemicals per capita: 23.49',5,190,70,150);
  }
   //Vermont Dot
    if (mouseX >= 475 && mouseX <= 485 && mouseY >= 55 && mouseY <= 65){
    textSize(10);
    text('Vermont: Percent of children with elevated lead levels: 0.57% / Toxic chemicals: 271,178 lbs / Pounds of chemicals per capita: 0.43',5,190,70,150);
  }
   //New Hampshire Dot
    if (mouseX >= 487 && mouseX <= 497 && mouseY >= 65 && mouseY <= 75){
    textSize(10);
    text('New Hampshire: Percent of children with elevated lead levels: 0.67% / Toxic chemicals: 726,528 lbs / Pounds of chemicals per capita: 0.55',5,190,70,150);
  }
   //West Virginia Dot
    if (mouseX >= 415 && mouseX <= 425 && mouseY >= 150 && mouseY <= 160){
    textSize(10);
    text('West Virginia: Percent of children with elevated lead levels: 0.69% / Toxic chemicals: 37,999,716 lbs / Pounds of chemicals per capita: 20.5',5,190,70,150);
  }
   //Connecticut Dot
    if (mouseX >= 484 && mouseX <= 494 && mouseY >= 90 && mouseY <= 100){
    textSize(10);
    text('Connecticut: Percent of children with elevated lead levels: 0.69% / Toxic chemicals: 2,099,282 lbs / Pounds of chemicals per capita: 0.58',5,190,70,150);
  }
   //Wisconsin Dot
    if (mouseX >= 325 && mouseX <= 335 && mouseY >= 75 && mouseY <= 85){
    textSize(10);
    text('Wisconsin: Percent of children with elevated lead levels: 0.77% / Toxic chemicals: 35,696,862 lbs / Pounds of chemicals per capita: 6.25',5,190,70,150);
  }
   //Rhode Island Dot
    if (mouseX >= 494 && mouseX <= 504 && mouseY >= 90 && mouseY <= 100){
    textSize(10);
    text('Rhode Island: Percent of children with elevated lead levels: 0.81% / Toxic chemicals: 302,326 lbs / Pounds of chemicals per capita: 0.29',5,190,70,150);
  }
   //Ohio Dot
    if (mouseX >= 395 && mouseX <= 405 && mouseY >= 135 && mouseY <= 145){
    textSize(10);
    text('Ohio: Percent of children with elevated lead levels: 0.96% / Toxic chemicals: 130,988,494 lbs / Pounds of chemicals per capita: 11.34',5,190,70,150);
  }
   //Pennsylvania Dot
    if (mouseX >= 440 && mouseX <= 450 && mouseY >= 108 && mouseY <= 118){
    textSize(10);
    text('Pennsylvania: Percent of children with elevated lead levels: 1.28% / Toxic chemicals: 97,111,482 lbs / Pounds of chemicals per capita: 7.63',5,190,70,150);
  }
   //New York Dot
    if (mouseX >= 455 && mouseX <= 465 && mouseY >= 70 && mouseY <= 80){
    textSize(10);
    text('New York: Percent of children with elevated lead levels: 1.46% / Toxic chemicals: 16,783,980 lbs / Pounds of chemicals per capita: 0.86',5,190,70,150);
  }
  
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
  ellipse(445,113,10,10);
  //New York
  ellipse(460,75,10,10);
}
