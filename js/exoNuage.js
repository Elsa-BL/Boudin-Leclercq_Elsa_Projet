
// let img, img2; //créer une variable pour stocker l'image

// let imgListe = []

// let gommeMode 
// gommeMode = false


// // let randTest = random(0,155)
// // console.log("SALUT LE RANDOM MARCHE T IL ??? ", randTest)


// let random
// random = 0

// function preload() {
// 	imgListe[0] = loadImage("image/nuages/nuages (1).png")
//   imgListe[1] = loadImage("image/nuages/nuages (2).png")
//   imgListe[2] = loadImage("image/nuages/nuages (3).png")
//   imgListe[3] = loadImage("image/nuages/nuages (4).png")
//   imgListe[4] = loadImage("image/nuages/nuages (5).png")

//   // console.log(imgListe)


//   for (let i = 1; i<9; i++){
//       listeMasque[i-1]=loadImage("image/masques/masque (" +i+").png")
//   }
//   // console.log(listeMasque)
// }


// function setup() {   
//   imageMode(CENTER)
//   createCanvas(windowWidth, windowHeight)
//   for (let i = 0; i < imgListe.length; i++){
//     imgListe[i].resize(200,0)
//   }
// }

// function mouseDragged(){

//   // let r = random(20,250)
//   // let g = random(50,240)
//   // let b = random(60,150)
//   // console.log(r,g,b)


//   if (gommeMode == false){
//     blendMode(BLEND)
//   }else{
//     blendMode(REMOVE)
//   } 
  
//   // // tint(r,g,b)
//   // image(imgListe[random], mouseX, mouseY)

// }



// function mousePressed(){
//   random++
//   if (random == 4){
//     random = 0
//   }
  
// }

// function keyPressed(){
//   if (key == 'e'){
//   gommeMode = true
// } else {
//   gommeMode = false
// }
// }

let newFeuille

let listeMasque = []
let imgListe = []

let compteur = 0

let gommeMode = false

let brush1

let couleur = 0

function preload() {

	imgListe[0] = loadImage("image/nuages/nuages (1).png")
  imgListe[1] = loadImage("image/nuages/nuages (2).png")
  imgListe[2] = loadImage("image/nuages/nuages (3).png")
  imgListe[3] = loadImage("image/nuages/nuages (4).png")
  imgListe[4] = loadImage("image/nuages/nuages (5).png")

  brush1 = loadImage("image/imageDetourage.png")
  

  for (let i = 1; i<10; i++){
      listeMasque[i-1]=loadImage("image/masques/masque (" +i+").png")
  }
}

function setup(){

  //regler le framerate
  frameRate(60)

  createCanvas(windowWidth,windowHeight)
  imageMode(CENTER)
  
  brush1.resize(200,200)

    for (let i = 0; i < listeMasque.length; i++){
    listeMasque[i].resize(700,0)
  }
  for (let i = 0; i < imgListe.length; i++){
    imgListe[i].resize(200,0)
  }

  newFeuille = createGraphics(width, height)
  newFeuille.background(255,255,255)
  newFeuille.blendMode(REMOVE)
  newFeuille.imageMode(CENTER)
  newFeuille.image(random(listeMasque), width/2, height/2)
  
}



function draw(){
  // image(random[listeMasque], 0,0)
  image(newFeuille, width/2, height/2)

  if (couleur == 1){
      tint(0)
    }

    else if (couleur == 2){
      tint(50)
    }
    else if (couleur == 3){
      tint(110)
    }
    else if (couleur == 4){
      tint(155)
    }
    else if (couleur == 5){
      tint(210)
    }
    else if (couleur == 0){
      tint(150)
    }
    
    console.log("couelur"+couleur)
    image(brush1,mouseX,mouseY);
    noTint()
}



function mouseDragged(){
  console.log(compteur);

  if (gommeMode == false){
    blendMode(BLEND)
    // if (couleur == 1){
    //   tint(40,472,235)
    // }

    // else if (couleur == 2){
    //   tint(161,25,234)
    // }
    // else if (couleur == 3){
    //   tint(255,172,27)
    // }
    // else if (couleur == 4){
    //   tint(54,190,75)
    // }
    // else if (couleur == 5){
    //   tint(234,5,5)
    // }
    // else if (couleur == 0){
    //   tint(150)
    // }

    
    
    
  }
  else{
    blendMode(REMOVE)
    image(imgListe[compteur],mouseX,mouseY);
  }


  
}



function mousePressed(){
  if (gommeMode == false){
    compteur++;
    if(compteur >= imgListe.length){
      compteur = 0;
    }
  }
    
}


function keyPressed(){
  if (key == 'e'){
  gommeMode = true
} else {
  gommeMode = false
}

if (key =="1"){
  couleur = 1
  
}
if (key =="2"){
  couleur = 2
}
if (key =="3"){
   couleur = 3
}
if (key =="4"){
  couleur = 4
}
if (key =="5"){
  couleur = 5
}
if (key =="0"){
  couleur = 0
}

}