

let PosMouse_x = mouseX;
let PosMouse_y = mouseY


function setup() {
    createCanvas(windowWidth, windowHeight)
    background(255,255,255,255)

    console.log("No problemo francesco")

}

function draw() {
    

    /*Défi 1*/ 
    
    line(windowWidth/2,windowHeight/2,random(windowWidth),random(windowHeight))
    strokeWeight(random(0,4))
    



    /*Défi 2*/ 
    
    
    
    triangle(0,windowHeight, windowWidth, windowHeight, PosMouse_x, PosMouse_y)
    fill(random(255),random(255),random(255))
    

    /*Défi 3*/ 

    
    // let PosMouse_x = mouseX;
    // let PosMouse_y = mouseY;
    circle(PosMouse_x, PosMouse_y, 200)

    if (PosMouse_x <= windowWidth/2){
        fill(random(50,255), 43, 120)
    }else{
        fill(120,  random(50,255), 43)
    }
    

    /*Défi 3 Bis*/ 

    
    // let PosMouse_x = mouseX;
    // let PosMouse_y = mouseY;

    noFill()
    stroke(255,105,26)
    circle(PosMouse_x, PosMouse_y, 100)
    fill(0,0,0)
    circle(PosMouse_x, PosMouse_y, 50)
    fill(255,255,255)
    circle(PosMouse_x, PosMouse_y, 15)
    

    /*Défi 4*/ 
    noStroke()
    fill(150+frameCount/5, 25,255-frameCount/6)
    square(frameCount/3, 20, 100)
    
    fill(2, 255-frameCount/2,255-frameCount/10)
    square(frameCount/5, 150, 200)
    
    fill(225, 10+frameCount/3, 56)
    square(frameCount, 400, 10)
    
    fill(10+frameCount/3, 255, 56+frameCount/5)
    square(frameCount, 500+frameCount, 10)




    
}

