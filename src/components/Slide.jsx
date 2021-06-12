import react, {Component} from 'react';

import  './Slide.css';


var countPhoto = 0;
var startedAt = 0; 
var duration = 3000;
var clicked = false;

var moving = false;
var xStart = 0;


function start() {
    startedAt = Date.now()
    requestAnimationFrame(update)
    clicked = false;
}

window.onload = function() {
    start();
};

function update() {
    let elapsedTime = Date.now() - startedAt; // time da ultima vez que deu update

    // playback é de 0 a 1
    // começa em 0 e termina em 1
    let playback = elapsedTime / duration;
                    
    if (playback >= 0 && playback < 1) {
        // Queue the next frame
        requestAnimationFrame(update)
    } 
    else {
        if(!clicked && !moving){
            updateImg();
        }
        else{
            start();
        }
    }
}

function startmoving(event){
    moving = true;
    xStart = event.clientX;
}

function stopmoving(event){
    let width = document.getElementById("slide").clientWidth;

    let x = event.clientX - xStart;
    if(moving){
        if(x > 0){
            if(x > width / 3){
                countPhoto--;
                if (countPhoto<0) {
                    countPhoto=3;
                }
            }
        }
        else if(x < 0){
            if(x *(-1) > width / 3){
                countPhoto++;
                if (countPhoto>3) {
                    countPhoto=0;
                }
            }
        }
        nextImg();
        moving = false;
    }
}


function slide(event){
    if(moving == true){
        let xa = (event.clientX - xStart);

        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        
        let d = -vw * 0.6 * countPhoto + xa;
        let s = "translate("+d+"px, 0)";
        
        let elem = document.getElementById("slide-imgs");
        elem.style.transform = s;
    }
}

function photos(n){
    countPhoto=n;
    clicked = true;
    nextImg();  
}

function photo00(){   
    photos(0);               
}
function photo01(){   
    photos(1);
}
function photo02(){ 
    photos(2);   
}
function photo03(){ 
    photos(3);   
}


function nextImg(){
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    
    // let d = -vw * 0.6 * countPhoto;
    let d = -vw * 0.9 * countPhoto;
    let s = "translate("+d+"px, 0)";

    let el = document.getElementById("slide-radio0" + countPhoto);
    el.checked = true; 

    let elem = document.getElementById("slide-imgs");
    elem.style.transform = s;
    start();
}


function updateImg(){
    countPhoto++;
    if (countPhoto>3) {
        countPhoto=0;
    }
    nextImg();
}



export default function Slide(props){
    let imgCoffeeBanner01 = props.img01;
    let imgCoffeeBanner02 = props.img02;
    let imgCoffeeBanner03 = props.img03;
    let imgCoffeeBanner04 = props.img04;

    return(
        <div id="slide" onMouseDown={(e)=>startmoving(e)} onMouseUp={(e)=>stopmoving(e)} onMouseLeave={(e)=>stopmoving(e)} onMouseMove={(e)=>slide(e)}>
            <div id="slide-imgs"> 
                <img className="banner" src={imgCoffeeBanner01} alt="" draggable="false"></img>
                <img className="banner" src={imgCoffeeBanner02} alt="" draggable="false"></img>
                <img className="banner" src={imgCoffeeBanner03} alt="" draggable="false"></img>
                <img className="banner" src={imgCoffeeBanner04} alt="" draggable="false"></img>
            </div>           
            
            <div className="slide-radios">
                <input id="slide-radio00" onClick={photo00} type="radio" defaultChecked={true} name="radio"></input>
                <input id="slide-radio01" onClick={photo01} type="radio" name="radio"></input>
                <input id="slide-radio02" onClick={photo02} type="radio" name="radio"></input>
                <input id="slide-radio03" onClick={photo03} type="radio" name="radio"></input>
            </div>
        </div> 
    )
}


