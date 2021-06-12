import react, {Component} from 'react';


import  './ProductLarge.css';


export default function ProductLarge(props){
    var im;
    if(props.image){
        im = props.image;
    }
    
    return(

        <div className="prodLarge">
            {/* <img className="proPadraoImg" src={imgproduto} alt="" draggable="false"></img> */}
            <img className="prodLargeImg" src={im} alt="" draggable="false"></img>
            <label className="prodLargeDescription">Café com Leite</label>
            <label className="prodLargeCost">R$100,00</label>
            <button className="bt-buy">Comprar</button>
        </div> 
    )
}