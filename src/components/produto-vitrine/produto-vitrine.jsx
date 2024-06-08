import "./produto-vitrine.css";
import xsalada from "../../assets/App/Card-burger-4.png";


const ProdutoVitrine = () => {
 
  return ( 
    <div className="produto-box text-center">
      <img src={xsalada} alt="foto do produto" />
      <div>
        <h2>X-tudo</h2>
        <p>Hamburguer de 250g, quijo, tomate, alface e cebola</p>
        <p>R$ 18,90</p>
      </div>
    </div> 
  );
}
 
export default ProdutoVitrine;