import "./navbar.css";
import logo from "../../assets/Logo.png";
import bag from "../../assets/App/bag.png";

const Navbar = () => {
  return ( 
    <div className="navbar">
      <img src={logo} className="logotipo" alt="logo do site" />
      <div className="menu">
        <a href="/">Histórico</a>
        <button className="btn btn-red">
          <img className="icon" src={bag} alt="icone da sacola" />
          Sacola
        </button>
      </div>
    </div>
   );
}
 
export default Navbar;