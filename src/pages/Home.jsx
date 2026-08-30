import Hero from "../componentes/Hero/Hero";
import About from "../componentes/About/About";
import Services from "../componentes/Services/Services";
import Gallery from "../componentes/Gallery/Gallery";
import Biografia from "./Biografia";

const Home = () => {
  return (
    <>
      <Hero />

      {/* EL TALLER */}
      <section id="taller">
        <About />
      </section>

      {/* SERVICIOS */}
      <section id="servicios">
        <Services />
      </section>

      {/* PROYECTOS DESTACADOS */}
      <section id="proyectos">
        <Gallery />
      </section>

      {/* HISTORIA */}
      <section id="historia">
        <Biografia />
      </section>
    </>
  );
};

export default Home;
