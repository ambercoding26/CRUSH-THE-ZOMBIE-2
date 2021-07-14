const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var stones = []
var bridge, base;

function preload(){
  zombie1 = loadImage("zombie.png");
  zombie2 = loadImage("zombie.png");
  zombie3 = loadImage("zombie.png");
  zombie4 = loadImage("zombie.png");

  backgroundImg = loadImage("background.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  zombie = createSprite(width/2, height - 110);
  zombie.addAnimation("lefttoright", zombie1, zombie2, zombie1);
  zombie.addAnimation("righttoleft", zombie3, zombie4, zombie3);
  zombie.scale = 0.1;
  zombie.velocity = 10;

  breakeButton = createButton(" ");
  breakButton.position(width - 200, height /2 -50);
  breakButton.class("breakbutton");
  breakButton.mousePressed(handleButtonPress);

}

function draw() {
  background(51);
  Engine.update(engine);

  stones.display();

  drawSprites();


}

function  handleButtonPress(){
  joinLink.detach();
  setTimeout(() => {
    bridge.break();
  }, 1500);
}

Matter.Composite.add(bridge.body, joinPoint);
jointLink = new Link(bridge, jointPoint);

for (var i = 0; i <= 8; i++){
  var x = random(width / 2 - 200, width / 2 + 300);
  var y = random(-10, 140);
  var stone = new Stone(x,y,80,80);
  stones.push(stone);
}