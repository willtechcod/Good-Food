import "./navbar.css";
import logo from "../../assets/Logo.png";
import bag from "../../assets/App/App/bag.png";
import Cart from "../cart/cart";

const Navbar = () => {
  function openSidebar(){
      const event = new CustomEvent('openSidebar');
      window.dispatchEvent(event);
  }

  return ( 
    <div className="navbar">
      <a href="/"><img src={logo} className="logotipo" alt="logo do site" /></a>
      <div className="menu">
        <a href="/historic">Histórico</a>
        <button onClick={openSidebar} className="btn btn-red">
          <img className="icon" src={bag} alt="icone da sacola" />
          Sacola
        </button>
      </div>
      <Cart  />
    </div>
   );
}
 
export default Navbar;