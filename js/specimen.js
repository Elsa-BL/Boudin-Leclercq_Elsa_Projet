let newFeuille

let listeMasque = []

let compteur = 0
 
let gommeMode = false



let brush = []



let pinceau = 0
let pinceau2 = 0

let tailleX = 100

let x =400
let y =400

let randomNoise

let activer = false
let on2 = false
let on3 = false

let hauteurButton = 130;

function preload() {
    

  
  for (let i =1; i<7; i++){
    brush[i-1] = loadImage("image/champi/texture"+i+".png")
  }

  for (let i = 1; i<7; i++){
      listeMasque[i-1]=loadImage("image/champi/masque"+i+".png")
  }
}


function setup(){

  


  //regler le framerate
  frameRate(60)

  createCanvas(windowWidth,windowHeight-windowHeight/5)
  imageMode(CENTER)
  rectMode(CENTER)
  
  
 background(64,52,40) //Modiff
  for (let i = 0; i<brush.length; i++){
    brush[i].resize(tailleX,0)
  }


  //   for (let i = 0; i < listeMasque.length; i++){
  //   listeMasque[i].resize(0,windowHeight)
  // }

  listeMasque[0].resize(0,windowHeight - windowHeight/5)
  listeMasque[1].resize(0,windowHeight - windowHeight/5)
  listeMasque[2].resize(windowWidth,0)
  listeMasque[3].resize(windowWidth,0)
  listeMasque[4].resize(windowWidth,0)
  listeMasque[5].resize(windowWidth,0)


  newFeuille = createGraphics(width, height)
  newFeuille.background(64,52,40) //Modif couleur fond
  newFeuille.blendMode(REMOVE)
  newFeuille.imageMode(CENTER)
  newFeuille.image(random(listeMasque), width/2, height/2)
  console.log(newFeuille)


  myPicker = createColorPicker('beige');
  myPicker.position(1020, 22);



  //Creation d'un bouton pour activer/desactiver le pinceau
  let button = createButton("Activer/Desactiver Pinceau 1")
  button.position(10,270)
  button.mousePressed(onOff)

  let button2 = createButton("Activer désactiver Pinceau2")
  button2.position(10,295)
  button2.mousePressed(OnOff2)
  // button2.addClass('myClass');


  // let button3 = createButton("Activer désactiver Pinceau3")
  // button3.position(10,320)
  // button3.mousePressed(OnOff3)

  let buttonTexture1 = createButton("")
  buttonTexture1.position(10,hauteurButton)
  buttonTexture1.mousePressed(texture1)
  buttonTexture1.addClass("texture1");

  let buttonTexture2 = createButton("")
  buttonTexture2.position(80,hauteurButton)
  buttonTexture2.mousePressed(function(){pinceau=1})
  buttonTexture2.addClass("texture2");

  let buttonTexture3 = createButton("")
  buttonTexture3.position(150,hauteurButton)
  buttonTexture3.mousePressed(function(){pinceau=2})
  buttonTexture3.addClass("texture3");

  let buttonTexture4 = createButton("")
  buttonTexture4.position(220,hauteurButton)
  buttonTexture4.mousePressed(function(){pinceau=3})
  buttonTexture4.addClass("texture4");

   let buttonTexture5 = createButton("")
  buttonTexture5.position(290,hauteurButton)
  buttonTexture5.mousePressed(function(){pinceau=4})
  buttonTexture5.addClass("texture5");

  let buttonTexture6 = createButton("")
  buttonTexture6.position(360,hauteurButton)
  buttonTexture6.mousePressed(function(){pinceau=5})
  buttonTexture6.addClass("texture6");


  let buttonTexture11 = createButton("")
  buttonTexture11.position(500,hauteurButton)
  buttonTexture11.mousePressed(function(){pinceau2=0})
  buttonTexture11.addClass("texture1");

  let buttonTexture22 = createButton("")
  buttonTexture22.position(570,hauteurButton)
  buttonTexture22.mousePressed(function(){pinceau2=1})
  buttonTexture22.addClass("texture2");

  let buttonTexture33 = createButton("")
  buttonTexture33.position(640,hauteurButton)
  buttonTexture33.mousePressed(function(){pinceau2=2})
  buttonTexture33.addClass("texture3");

  let buttonTexture44 = createButton("")
  buttonTexture44.position(710,hauteurButton)
  buttonTexture44.mousePressed(function(){pinceau2=3})
  buttonTexture44.addClass("texture4");

  let buttonTexture55 = createButton("")
  buttonTexture55.position(780,hauteurButton)
  buttonTexture55.mousePressed(function(){pinceau2=4})
  buttonTexture55.addClass("texture5");
  


}



function Gomme(){
    c = (noise(200+frameCount*0.009)*windowWidth)
    d = (noise(459071+frameCount*0.009)*windowHeight)
    blendMode(REMOVE)
    image(brush[pinceau], c , d , tailleX,0)
    blendMode(BLEND)
}

function onOff(){
  if (activer == true){
    activer = false
  }else{
    activer = true
  }
}

function OnOff2(){
  console.log("2")
  if (on2 == true){
    on2 = false
    console.log('false')
  }else{
    on2= true
    console.log('true')
  }
}

// function OnOff3(){
//   console.log("3")
//   if (on3 == true){
//     on3 = false
//     console.log('false')
//   }else{
//     on3= true
//     console.log('true')
//   }
// }


function draw(){

  let rand1 = random(0,250)
  let rand2 = random(0,250)

  

  if (activer == true){
    
      tint(255)
    
    
      a = (noise(2000+frameCount*0.009)*windowWidth)
      b = (noise(45671+frameCount*0.009)*windowHeight)
      tint(200,(noise(50+frameCount*0.2)*255)-50,noise(frameCount*0.1)*105-100)

      
      image(brush[pinceau], a , b , tailleX,0)

      
  }

  if (on2 == true ){
    
    tint(rand1,rand2,noise(frameCount*0.1)*105-100)
    console.log('actif')

    a2 = (noise(28900+frameCount*0.007)*windowWidth)
    b2 = (noise(79261+frameCount*0.009)*windowHeight)

    image(brush[pinceau2], a2 , b2 , tailleX,0)

  }


  //   if (on3 == true ){
    
  //   tint(0)
  //   console.log('actif')

  //   a3 = (noise(10+frameCount*0.007)*windowWidth)
  //   b3 = (noise(761+frameCount*0.09)*windowHeight)

  //   image(brush[6], a3 , b3)

  // }


  if (gommeMode == true){
        Gomme()
      }

  noTint()
  image(newFeuille, width/2, height/2) //Pour faire apparaitre le masque (supprimer ce qu'il y a autour du masque)

}



function premierPlan(){
  tint(myPicker.color())
  translate(windowWidth/2,windowHeight/2)
  rotate(random(100,360))
  image(brush[1], 0,0,1000,1000);
  
  console.log("premier plan")
}

function texture1(){
  pinceau = 0
}


function mouseDragged(){

    tint(255)
    image(newFeuille, width/2, height/2)

    

    tint(myPicker.color())
    
    image(brush[pinceau],mouseX,mouseY, tailleX);


}





function keyPressed(){
  
  if (key == 'e'){
    if (gommeMode == false){
    gommeMode = true
    } else {
  gommeMode = false
}
  }


if (key == "w"){
    pinceau = 0
}

if (key == "x"){
  pinceau = 1
}

if (key == "c"){
  pinceau = 2
}

if (key == "v"){
  pinceau = 3
}


if (key == "ArrowDown"){
  tailleX -= 10
}
if (key == "ArrowUp"){
  tailleX += 10
}
    
if (key=="p"){
  premierPlan()
}

// console.log(key, tailleX)





}
