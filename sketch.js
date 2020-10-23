const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var plinkos=[];
var particles=[];
var divisions =[];
var divisionHeight;
function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create()
  world = engine.world;
  ground = new Ground(width/2 , height-10 , width , 10)
  divisionHeight=height/3;
  for ( var k= 0; k<=width; k=k+width/6){
    divisions.push(new Ground(k, height-divisionHeight/2-15,10, divisionHeight))
  }
  for(var j =40; j<=width;  j=j+50 )
  {
    plinkos.push(new Plinko(j, 75))
  }
  for(var  j=15; j<= width-10;j=j+50)
  {
   plinkos.push( new Plinko(j , 125))
  }
  for(var j =40; j<=width;  j=j+50 )
  {
    plinkos.push(new Plinko(j, 175))
  }
  for(var  j=15; j<= width-10;j=j+50)
  {
   plinkos.push( new Plinko(j , 225))
  }
  for(var j =40; j<=width;  j=j+50 )
  {
    plinkos.push(new Plinko(j, 275))
  }
  for(var  j=15; j<= width-10;j=j+50)
  {
   plinkos.push( new Plinko(j , 325))
  }
  for(var j =40; j<=width;  j=j+50 )
  {
    plinkos.push(new Plinko(j, 375))
  }
  for(var  j=15; j<= width-10;j=j+50)
  {
   plinkos.push( new Plinko(j , 425))
  }
  for(var j =40; j<=width;  j=j+50 )
  {
    plinkos.push(new Plinko(j, 475))
  }

}

function draw() {
  background(0);  
  Engine.update(engine)
  ground.display();
  for(var j= 0 ; j< plinkos.length; j++){
    plinkos[j].display()
  }
  for(var k= 0; k<divisions.length; k++){
    divisions[k].display()
  }
  
  for (var j=0 ; j< particles.length; j++){
    particles[j].display();
  }
}

function touchStarted(){
  if(touches[0]&& touches[0].y<75){
  console.log(touches)
  particles.push(new Particle(touches[0].x,touches[0].y, 10))}
}
