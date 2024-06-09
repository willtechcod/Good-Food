import { useEffect, useState } from "react";
import { Dock } from "react-dock";
import "./cart.css";
import ProductCart from "../product-cart/produc-cart";


const Cart = () => {

  const [show, setShow] = useState(false);

  useEffect( function(){
    window.addEventListener('openSidebar', function(){
      setShow(true);
    });
  },[]);

  return ( 
    <Dock 
    position="right"
    isVisible={show}
    fluid={false}
    size={380}
    onVisibleChange={function (visible) { setShow(visible)}}
    >
      <div className="text-center">
        <h1>Meu Pedido</h1>
      </div>
      <div className="list-products">
          <ProductCart />
          <ProductCart />
      </div>

      <div className="cart-footer">

        <div className="cart-footer-price">
          <strong>Total:</strong>
          <strong>R$ 250,00</strong>
        </div>

        <div>
            <button className="btn btn-checkout">
              Finanilizar Pedido
            </button>
        </div>
      </div>
    </Dock>
   );
}
 
export default Cart;