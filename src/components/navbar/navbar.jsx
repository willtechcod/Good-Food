import "./navbar.css";
import logo from "../../assets/Logo.png";
import bag from "../../assets/App/App/bag.png";

const Navbar = () => {
  return ( 
    <div className="navbar">
      <a href="/"><img src={logo} className="logotipo" alt="logo do site" /></a>
      <div className="menu">
        <a href="/historic">Histórico</a>
        <button className="btn btn-red">
          <img className="icon" src={bag} alt="icone da sacola" />
          Sacola
        </button>
      </div>
    </div>
   );
}
 
export default Navbar;