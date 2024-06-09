import "./product-cart.css";
import hamburger from "../../assets/App/App/Burger.png";

const ProductCart = () => {
  return ( 
    <div className="product-cart-box">
      <img src={hamburger} alt="imagem do pedido" />
      <div>
        <p className="product-cart-name">X-Tudo</p>
        <p className="product-cart-price">R$ 22,99</p>

        <div className="product-cart-footer">
            <div >
              <button className="product-cart-footer-btn">-</button>
              <span className="product-cart-footer-qtd">01</span>
              <button className="product-cart-footer-btn">+</button>
            </div>
            <p className="product-cart-footer-price">R$ 22,90</p>
        </div>
      </div>
    </div>
   );
}
 
export default ProductCart;