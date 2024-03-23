const canvas = document.querySelector("canvas")
//zorgt ervoor dat ik kan tekenen
const c = canvas.getContext("2d")
canvas.height = innerHeight
canvas.width = innerWidth

let score=0


//een voorwaarden hoe je er voor zorgt dat je alleen kan scoren dat het true is, dit zorgt ervoor dat de score niet blijft doortikken ook al sta je stil. canscore staat op false zodat je score niet elke frame omhoog gaat
let canscore=false

//wijst naar een image, je kan image niet linken stel 
const image = new Image()
image.src="./pics/waterdrop.png"
//foto bron https://www.waterdrop.nl/products/thermo-steel-bottle?variant=47718772474184

const background = new Audio("./audio/backgroundmusic.mp3")
background.volume = 0.03
//bron https://www.youtube.com/watch?v=p22EqQBYRBM&t=1110s&ab_channel=luvornot


const win = new Audio("./audio/win.mp3")
win.volume = 0.01
//bron https://youtu.be/lP51xmAS5Uk?si=nHDE-IIrMx_VKJso

const swoosh = new Audio("./audio/swoosh.mp3")
swoosh.volume = 0.05
//bron https://www.youtube.com/watch?v=u854jx0Fq_k&ab_channel=FakePlatabush

const bottle = {
    x: 0,
    y: 0,
    width: 150,
    height: 302,
    yvel: 1,
    xvel: 1,
    rotation: 3.9,


    //tekenen van bottle
    draw(){
        //rotaten de hele canvas om de midden van de bottle
        c.translate(bottle.x+bottle.width/2,bottle.y+bottle.height/2)
        c.rotate(bottle.rotation)
        c.translate(-(bottle.x+bottle.width/2),-(bottle.y+bottle.height/2))
        //hier teken je de image
        c.drawImage(image, this.x, this.y, this.width, this.height)
        //rotate ie het weer terug
        c.translate(bottle.x+bottle.width/2,bottle.y+bottle.height/2)
        c.rotate(-bottle.rotation)
        c.translate(-(bottle.x+bottle.width/2),-(bottle.y+bottle.height/2))
        
            },     
        //updaten van alle eigenschappen van bottle (niet alle) ,(wel alle)
    update(){
        //veranderd hoogte van stomme bottle
        bottle.y = bottle.y+bottle.yvel 
        
        if(bottle.y<canvas.height-bottle.height){
        //zwaartekracht van bottle :0
        bottle.yvel = bottle.yvel+1

        bottle.rotation=bottle.rotation+0.07
        }
        //kijken of het ondergronds gaat of niet
        else{
            bottle.yvel= 0
            bottle.xvel= bottle.xvel * 0
            bottle.y= canvas.height-bottle.height
           //de score bij wanneer de waterdroppie valt en op welk graad hij dan valt dat je dan een punt krijgt
            if((bottle.rotation%Math.PI<0.2|| bottle.rotation % Math.PI > Math.PI - 0.2)&&canscore){
                score=score+1
                win.play()
                canscore=false
            }
        }  
        //kijkt of bottle niet voorbij de linker wall gaat
        if(bottle.x>=0){
        bottle.x = bottle.x+bottle.xvel
        }
        else{
         bottle.xvel=0 
         bottle.x=0  
        }
        //rechts niet voorbij gaan (ik bedoel nu een muur)
        if(bottle.x<canvas.width-bottle.width){
            bottle.x = bottle.x+bottle.xvel
            }
        else{
            bottle.xvel=0 
            bottle.x=canvas.width-bottle.width
            }
    },
    jump(mouse){
       //veranderd de snelheid van hoogte van bottle
        bottle.yvel=(bottle.y-mouse.clientY) * -0.09
       //veranderd de snelheid van verplaatsing x
        bottle.xvel=(bottle.x-mouse.clientX) * -0.01
        canscore=true
        swoosh.play()
    }
    }

    //wanneer je klikt voert t de fuction uit.
addEventListener("click", bottle.jump)

function drawtext(){
let x=canvas.width/2
let y=canvas.height/3
c.font="50px arial"
c.textAlign="center"
c.fillStyle="#FAE8F3"
c.fillText("Flip the stolen bottle!", x, y)
c.fillText("Score: "+score, x, y-100)
}

//is de fucntie van steeds blijft repeaten
function animate(){
    requestAnimationFrame(animate)
    c.fillStyle = "#EB97A8"
    c.fillRect(0, 0, canvas.width, canvas.height)
    bottle.draw()
    bottle.update()
    drawtext()
    console.log(score)
    background.play()
}

animate()

