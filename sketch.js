const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground;
var backgroundImg;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup() {
    var canvas = createCanvas(1200, 400);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(150, 350, 300, 170);

    box1 = new Box(700, 355, 70, 70);
    box2 = new Box(920, 355, 70, 70);
    pig1 = new Pig(810, 365);
    log1 = new Log(810, 310, 300, PI/2);

    box3 = new Box(700, 265, 70, 70);
    box4 = new Box(920, 265, 70, 70);
    pig2 = new Pig(810, 275);
    log2 = new Log(810, 220, 300, PI/2);

    box5 = new Box(810, 175, 70, 70);
    log3 = new Log(750, 120, 150, PI/4);
    log4 = new Log(870, 120, 150, -PI/4);

    bird = new Bird(100, 100);
}

function draw() {
    background(backgroundImg);
    Engine.update(engine);

    ground.display();
    platform.display();

    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    
    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
}
