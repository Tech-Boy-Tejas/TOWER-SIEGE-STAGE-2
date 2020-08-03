const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;


var engine, world;

function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;

    platform1 = new Ground(700,300,250,20);
    platform2 = new Ground(1400,600,250,20);

    box1 = new Box(721,270,40,40);
    box2 = new Box(761,270,40,40); 
    box3 = new Box(801,270,40,40);
    box4 = new Box(681,270,40,40);
    box5 = new Box(641,270,40,40);
    box6 = new Box(601,270,40,40);
    box7 = new Box(641,230,40,40);
    box8 = new Box(681,230,40,40);
    box9 = new Box(721,230,40,40);
    box10 = new Box(761,230,40,40);
    box11 = new Box(681,190,40,40);
    box12 = new Box(721,190,40,40);
    box13 = new Box(701,150,40,40);
    
    box14 = new Box(1421,570,40,40);
    box15 = new Box(1461,570,40,40);
    box16 = new Box(1501,570,40,40);
    box17 = new Box(1381,570,40,40);
    box18 = new Box(1341,570,40,40);
    box19 = new Box(1301,570,40,40);
    box20 = new Box(1341,530,40,40);
    box21 = new Box(1381,530,40,40);
    box22 = new Box(1421,530,40,40);
    box23 = new Box(1461,530,40,40);
    box24 = new Box(1381,490,40,40);
    box25 = new Box(1421,490,40,40);
    box26 = new Box(1401,450,40,40);

    stone = new Polygon(120,400,60);
    sling = new constraint(stone.body,{x:120,y:400});
}

function draw(){
    background(0);
    Engine.update(engine);

    platform1.display();
    platform2.display();


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

    stone.display();
    sling.display();
    
}

function mouseDragged(){
    Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if(keyCode === 32){
        sling.attach(stone.body);
    }
}