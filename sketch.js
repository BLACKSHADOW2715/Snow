const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;

function preload(){
  snowcity=loadImage("snow3.jpg")
}

function setup() {
  createCanvas(1400,700);
  engine = Engine.create();
  world = engine.world;
  box1 = new Snow(600, 20, 70, 70);
  box2 = new Snow(650, -10, 70, 70);
  box3 = new Snow(500,10, 70, 70);
  box4 = new Snow(430, 10, 70, 70);
  box5 = new Snow(200, 10, 70, 70);
  box6 = new Snow(100, -100, 70, 70);
  box7 = new Snow(250, -100, 70, 70);
  box8 = new Snow(300,-100, 70, 70);
  box9 = new Snow(370, -100, 70, 70);
  box10 = new Snow(290, -100, 70, 70);
  box11 = new Snow(650, -200, 70, 70);
  box12 = new Snow(560, -200, 70, 70);
  box13 = new Snow(690,-200, 70, 70);
  box14 = new Snow(450, -200, 70, 70);
  box15 = new Snow(200, -200, 70, 70);
  box16 = new Snow(120, -350, 70, 70);
  box17 = new Snow(660,-350, 70, 70);
  box18 = new Snow(540,-350, 70, 70);
  box19 = new Snow(240, -350, 70, 70);
  box20 = new Snow(420, -350, 70, 70);
  box21 = new Snow(170, -500, 70, 70);
  box22 = new Snow(550, -500, 70, 70);
  box23 = new Snow(440,-500, 70, 70);
  box24 = new Snow(630, -500, 70, 70);
  box25 = new Snow(200, -500, 70, 70);
  box26 = new Snow(300, -650, 70, 70);
  box27 = new Snow(650, -650, 70, 70);
  box28 = new Snow(530,-650, 70, 70);
  box29 = new Snow(430, -650, 70, 70);
  box30 = new Snow(160, -650, 70, 70);
  boxe6 = new Snow(100, -700, 70, 70);
  boxe7 = new Snow(250, -700, 70, 70);
  boxe8 = new Snow(300,-700, 70, 70);
  boxe9 = new Snow(370, -700, 70, 70);
  boxe10 = new Snow(290, -700, 70, 70);
  boxe11 = new Snow(650, -800, 70, 70);
  boxe12 = new Snow(560, -800, 70, 70);
  boxe13 = new Snow(690,-800, 70, 70);
  boxe14 = new Snow(350, -800, 70, 70);
  boxe15 = new Snow(200, -800, 70, 70);
  boxe16 = new Snow(120, -950, 70, 70);
  boxe17 = new Snow(60,-950, 70, 70);
  boxe18 = new Snow(540,-950, 70, 70);
  boxe19 = new Snow(540, -950, 70, 70);
  boxe20 = new Snow(320, -950, 70, 70);
  boxe21 = new Snow(670, -1100, 70, 70);
  boxe22 = new Snow(650, -1100, 70, 70);
  boxe23 = new Snow(440,-1100, 70, 70);
  boxe24 = new Snow(430, -1100, 70, 70);
  boxe25 = new Snow(200, -1100, 70, 70);
  boxe26 = new Snow(300, -1250, 70, 70);
  boxe27 = new Snow(650, -1250, 70, 70);
  boxe28 = new Snow(530,-1250, 70, 70);
  boxe29 = new Snow(430, -1250, 70, 70);
  boxe30 = new Snow(160, -1250, 70, 70);


}


function draw() {
  background(snowcity);  
  Engine.update(engine);
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();
box27.display();
box28.display();
box29.display();
box30.display();
boxe6.display();
boxe7.display();
boxe8.display();
boxe9.display();
boxe10.display();
boxe11.display();
boxe12.display();
boxe13.display();
boxe14.display();
boxe15.display();
boxe16.display();
boxe17.display();
boxe18.display();
boxe19.display();
boxe20.display();
boxe21.display();
boxe22.display();
boxe23.display();
boxe24.display();
boxe25.display();
boxe26.display();
boxe27.display();
boxe28.display();
boxe29.display();
boxe30.display();



  drawSprites();

  
}