import logo from './logo.svg';
import './Main.css';

import mainLogo from'./images/LogoCafe01.png';

import imgCart from'./images/cart.svg';
import imgMenu from'./images/menu.svg';

import imgPayment from'./images/payment.png';


import imgCoffeeBanner01 from'./images/coffee-banner-01.jpg';
import imgCoffeeBanner02 from'./images/coffee-banner-02.jpg';
import imgCoffeeBanner03 from'./images/coffee-banner-03.jpg';
import imgCoffeeBanner04 from'./images/coffee-banner-04.jpg';


import imgCoffeeSquare01 from'./images/coffee-square-01.jpg';
import imgCoffeeSquare02 from'./images/coffee-square-02.jpg';
import imgCoffeeSquare03 from'./images/coffee-square-03.jpg';
import imgCoffeeSquare04 from'./images/coffee-square-04.jpg';
import imgCoffeeSquare05 from'./images/coffee-square-05.jpg';
import imgCoffeeSquare06 from'./images/coffee-square-06.jpg';


import imgCoffeeLarge01 from'./images/coffee-3x4-01.jpg';
import imgCoffeeLarge02 from'./images/coffee-3x4-02.jpg';
import imgCoffeeLarge03 from'./images/coffee-3x4-03.jpg';
import imgCoffeeLarge04 from'./images/coffee-3x4-04.jpg';
import imgCoffeeLarge05 from'./images/coffee-3x4-05.jpg';
import imgCoffeeLarge06 from'./images/coffee-3x4-06.jpg';


import Slide from'./components/Slide.jsx';
import Menu from'./components/Menu.jsx';
import ProdutoPadrao from './components/ProductLarge.jsx';
import ProdutoDesconto from './components/ProductSquare.jsx';
import SlideWW from './components/Slide';

var open = false;

function menuOpen(){
  document.getElementById("curtain").classList.add("menu-open");
  
  document.getElementById("bg").classList.add("dark-bg-open");
}



function Main() {
  return (
    <div className="App">
      
      <div className="top-promo">
        Frete grátis comprando até 23:55 de hoje!
      </div>
      <header className="header-homepage">
        <img className="logo" src={mainLogo} alt="Logo"></img>
        <div className="menu-space">
          <Menu open = {open} />
        </div>
        <img className="bt-cart" src={imgCart} alt="carrinho"></img>
        
        <img className="bt-menu" onClick={menuOpen} src={imgMenu} alt="carrinho"></img>
      </header>
      
        <Slide img01 = {imgCoffeeBanner01}
        img02 = {imgCoffeeBanner02}
        img03 = {imgCoffeeBanner03}
        img04 = {imgCoffeeBanner04}/>

        <div className="txt-info">As Melhores Marcas</div>
        <ProdutoPadrao image = {imgCoffeeLarge01}/>
        <ProdutoPadrao image = {imgCoffeeLarge04}/>
        <div className="txt-info">Com Os Maiores Descontos</div>

        
        <div className="discounts">
          <ProdutoDesconto cost={10} image = {imgCoffeeSquare01}/>
          <ProdutoDesconto cost={21} image = {imgCoffeeSquare02}/>
          <ProdutoDesconto cost={33} image = {imgCoffeeSquare03}/>
          <ProdutoDesconto cost={50} image = {imgCoffeeSquare04}/>
          <ProdutoDesconto cost={74} image = {imgCoffeeSquare05}/>
          <ProdutoDesconto cost={100} image = {imgCoffeeSquare06}/>
        </div>


      <footer className="footer-homepage">
        <div className="footer-infos">
              <div className="footer-txt payments">
                  Formas de Pagamento:
              </div>
              <img src={imgPayment} alt="Pagamento"></img>
              <div className="footer-txt contacts">
                  Contatos: 
              </div>
          </div>
      </footer>
      
    </div>
  );
}

export default Main;


