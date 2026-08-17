import Hero from "../componentes/Hero/Hero";
//import About from "../componentes/About/About";
import Services from "../componentes/Services/Services";
import Gallery from "../componentes/Gallery/Gallery";
import Biografia from "./Biografia";

const Home = () => {
  return (
    <>
      <Hero />

      

      <div id="servicios">
        <Services />
      </div>

      <div id="proyectos">
        <Gallery />
      </div>

      <Biografia />
    </>
  );
};

export default Home;