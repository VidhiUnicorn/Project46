var bt,heart,brain,lArm,Rarm,Lleg,Rleg,SI,LI;
var bti,hi,bi,lai,rai,lli,rli,sii,lii,box;
function preload (){
  bti = loadImage("images/body template.png");
  hi = loadImage("images/heart.png");
  bi = loadImage("images/brain.png");
  lai = loadImage("images/arms .png");
  rai = loadImage("images/armsL.png");
  lli = loadImage ("images/Leg BonesL.png");
  rli = loadImage ("images/Leg BonesR.png");
  sii = loadImage("images/intestinesS.png");
  lii = loadImage ("images/intestines.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  bt = new DetachedParts(width/2+200,height/2+50,100,400,bti)
  bt.resize(1.75)

  box = createSprite(width/2-250,height/2+50,350,800);
  box.shapeColor = "lightblue";

  heart = new DetachedParts (width/2-350,height/2-100,30,30,hi)
  heart.resize (0.3)

  Lleg = new DetachedParts (width/2-180,height/2-100,30,30,lli)
  Lleg.resize(0.3)

  lArm = new DetachedParts (width/2-350,height/2+80,30,30,lai)
  lArm.resize(0.2)

  LI= new DetachedParts (width/2-180,height/2+80,30,30,lii)
  LI.resize(0.5)

  SI = new DetachedParts (width/2-350,height/2+220,30,30,sii)
  SI.resize(0.5)

  Rarm = new DetachedParts (width/2-350,height/2+360,30,30,rai)
  Rarm.resize (0.2)

  brain = new DetachedParts (width/2-180,height/2+360,30,30,bi)
  brain.resize (0.3)

  Rleg = new DetachedParts (width/2-180,height/2+220,30,30,rli)
  Rleg.resize (0.3)
}

function draw() {
  background(255);
  
  if(mousePressedOver(brain)){
    brain.x = mouseX;
    brain.y = mouseY;
  }

  drawSprites();
}
