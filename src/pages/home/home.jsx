import Navbar from "../../components/navbar/navbar";
import ProdutoVitrine from "../../components/produto-vitrine/produto-vitrine";

const Home = () => {
  return ( 
    <>
      <Navbar/>

      <div className="container">
        <div className="titulo text-center">
            <h1>Nosso Cardápio</h1>
              <p className="subtitulo">
                  Clique em adicionar para colocar os produtos na sacola  de compras.
                  Se preferir, você pode pedir pelo whatsApp: (47) 99999-9999<br/>
            </p>
        </div>
      </div>
      
        <ProdutoVitrine/>
        <ProdutoVitrine/>
        <ProdutoVitrine/>
        <ProdutoVitrine/>
    </>
   );
}
 
export default Home;