import react, {Component} from 'react';

import  './ProductSquare.css';



export default function ProductSquare(props){
    var im = props.image;
  
        return(
            <div className="prodSquare">
                <img className="prodSquareImg" src={im} alt="" draggable="false"></img>
                <label className="prodSquareCost" >R${props.cost}</label>
            </div> 
        )
}


