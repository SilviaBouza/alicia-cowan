import {
  FaChurch,
  FaPaintBrush,
  FaHandsHelping,
} from "react-icons/fa";

import styles from "./Services.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";

const servicios = [
  {
    id: 1,
    icono: <FaChurch />,
    titulo: "Restauración",
    descripcion:
      "Conservación y recuperación de imágenes religiosas respetando su historia, materiales y valor artístico.",
  },
  {
    id: 2,
    icono: <FaPaintBrush />,
    titulo: "Creación de Obras",
    descripcion:
      "Diseño y elaboración de piezas religiosas realizadas con técnicas artesanales y acabados de alta calidad.",
  },
  {
    id: 3,
    icono: <FaHandsHelping />,
    titulo: "Asesoramiento",
    descripcion:
      "Acompañamiento a parroquias, instituciones y coleccionistas para el cuidado y conservación de sus obras.",
  },
];

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>

        <SectionTitle
          subtitle="Servicios"
          title="¿Cómo puedo ayudarte?"
        >
          Cada proyecto es tratado de forma personalizada,
          ofreciendo soluciones profesionales para la
          conservación y creación de arte religioso.
        </SectionTitle>

        <div className={styles.grid}>
          {servicios.map((servicio) => (
            <article
              key={servicio.id}
              className={styles.card}
            >
              <div className={styles.icon}>
                {servicio.icono}
              </div>

              <h3>{servicio.titulo}</h3>

              <p>{servicio.descripcion}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;