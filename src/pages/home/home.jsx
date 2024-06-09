import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import ProdutoVitrine from "../../components/produto-vitrine/produto-vitrine";

const Home = () => {
  return ( 
    <>
      <Navbar/>

      <div className="container">
        <div className="titulo text-center">
            <h1>Nosso <span className="span-title">Cardápio</span></h1>
              <p className="subtitulo">
                  Clique em adicionar para colocar os produtos na sacola  de compras.
                  Se preferir, você pode pedir pelo whatsApp: (47) 99164-7104<br/>
            </p>
        </div>
      </div>
          <div className="text-center">
            <ProdutoVitrine/>
          </div>
          <Footer/>
    </>
   );
}
 
export default Home;