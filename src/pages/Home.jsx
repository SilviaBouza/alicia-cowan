import Hero from "../componentes/Hero/Hero";
import About from "../componentes/About/About";
import Services from "../componentes/Services/Services";
import Gallery from "../componentes/Gallery/Gallery";
import Procesos from "../componentes/Procesos/Procesos.jsx";
import Biography from "../componentes/Biography/Biography";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Procesos />
      <Biography />
      
    </>
  );
};

export default Home;