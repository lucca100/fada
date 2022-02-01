var starImg,bgImg;
var star, starBody;
var fada, imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    imgFada= loadImage("fairyImage1","fairyImage1")
}

function setup() {
    createCanvas(800, 750);

    playSound("JoyMusic.mp3");

    fada=createSprite(100,100)
    fada.addImage(imgFada)
    fada.scale= 0.4;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

    if (star.y > 470 && starBody.position.y > 470 ){
    Matter.body.setStatic(starBody,true);
    }


}
