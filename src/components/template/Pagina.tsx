import Cabecalho from "./Cabecalho";
import MenuPrincipal from "./MenuPrincipal";
import Footer from "./Footer";

export default function Pagina() {
  return (
    <div className="h-screen">
      <Cabecalho />
      <MenuPrincipal />
      <Footer />
    </div>
  );
}
