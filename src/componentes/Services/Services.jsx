import {
  FaChurch,
  FaMonument,
  FaGem,
  FaPaintBrush,
  FaClone,
  FaHandsHelping,
} from "react-icons/fa";

import styles from "./Services.module.css";

const servicios = [
  {
    id: 1,
    icono: <FaChurch />,
    titulo: "Restauración de imágenes religiosas",
    descripcion:
      "Conservamos su valor histórico, artístico y espiritual.",
  },
  {
    id: 2,
    icono: <FaMonument />,
    titulo: "Restauración de esculturas",
    descripcion:
      "Intervenciones precisas para devolver estabilidad y belleza original.",
  },
  {
    id: 3,
    icono: <FaGem />,
    titulo: "Dorado a la hoja",
    descripcion:
      "Técnicas tradicionales de dorado en pan de oro de 24k.",
  },
  {
    id: 4,
    icono: <FaPaintBrush />,
    titulo: "Policromía",
    descripcion:
      "Recuperación y aplicación de policromías con criterios artísticos y técnicos.",
  },
  {
    id: 5,
    icono: <FaClone />,
    titulo: "Réplicas",
    descripcion:
      "Réplicas fieles realizadas con materiales nobles y técnicas artesanales.",
  },
  {
    id: 6,
    icono: <FaHandsHelping />,
    titulo: "Obras por encargo",
    descripcion:
      "Proyectos personalizados para instituciones y particulares.",
  },
];

const Services = () => {
  return (
    <section className={styles.services} id="servicios">

      <div className={styles.container}>

        <div className={styles.heading}>

          <span className={styles.subtitle}>
            Nuestros servicios
          </span>

          <div className={styles.titleLine}>
            <span></span>

            <h2>
              Especialistas en arte sacro
            </h2>

            <span></span>
          </div>

        </div>

        <div className={styles.grid}>

          {servicios.map((servicio) => (
            <article
              key={servicio.id}
              className={styles.card}
            >

              <div className={styles.icon}>
                {servicio.icono}
              </div>

              <h3>
                {servicio.titulo}
              </h3>

              <p>
                {servicio.descripcion}
              </p>

            </article>
          ))}

        </div>

        <div className={styles.action}>
          <a
            href="/servicios"
            className={styles.button}
          >
            Ver todos los servicios
            <span>→</span>
          </a>
        </div>

      </div>

    </section>
  );
};

export default Services;