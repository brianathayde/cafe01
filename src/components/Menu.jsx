import react, {Component} from 'react';

import  './Menu.css';


function menuClose(){
    document.getElementById("curtain").classList.remove("menu-open");
    
    document.getElementById("bg").classList.remove("dark-bg-open");
  }


export default function Menu(props){

    return(
        <div>
            <div id="curtain" className="menu">
                <ul className="ul-options">
                    <li className="option">Home</li>
                    <li className="option">Images</li>
                    <li className="option">About</li>
                    <li className="option">Contact</li>
                </ul>
            </div>
            <div id="bg" onClick={menuClose} className="dark-bg">             
            </div>
        </div>
    )
}


