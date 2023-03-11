import logoDnc from "../../assets/dnc-logo.png";
import cart from "../../assets/cart-shop.png";
import "./index.scss"

const Header = () => {
  return (
    <div className="nav__bar">
      <img src={logoDnc} alt="logo dnc" className="nav__bar-img"></img>
      <h3 className="nav__bar-title">Food</h3>

      <ul>
        <li>Variedades</li>
        <li>Lanches</li>
        <li>Pizzas</li>
        <li>Doces</li>
        <li>Promoções</li>
      </ul>

    <div className="nav__bar-buy">
      <h3 className="img-text">Minhas Compras</h3>
      <img src={cart} alt="logo dnc" className="img-buy"></img>
    </div>


    </div>
  )
}

export default Header