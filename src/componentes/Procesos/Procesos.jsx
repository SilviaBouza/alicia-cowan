import {
  FaSearch,
  FaTools,
  FaPalette,
  FaCheckCircle,
} from "react-icons/fa";

import styles from "./Procesos.module.css";

const pasos = [
  {
    id: 1,
    icono: <FaSearch />,
    titulo: "Evaluación",
    descripcion:
      "Se analiza el estado de conservación de la obra y se define el tratamiento más adecuado.",
  },
  {
    id: 2,
    icono: <FaTools />,
    titulo: "Restauración",
    descripcion:
      "Se realizan las intervenciones necesarias respetando los materiales y técnicas originales.",
  },
  {
    id: 3,
    icono: <FaPalette />,
    titulo: "Terminación",
    descripcion:
      "Se recupera la estética de la obra preservando su autenticidad y valor artístico.",
  },
  {
    id: 4,
    icono: <FaCheckCircle />,
    titulo: "Entrega",
    descripcion:
      "La pieza se entrega protegida y lista para su exhibición o uso litúrgico.",
  },
];

const Process = () => {
  return (
    <section className={styles.process}>
      <div className={styles.container}>
        <span className={styles.subtitle}>
          Nuestro proceso
        </span>

        <h2>
          Cada obra recibe una atención única
        </h2>

        <div className={styles.grid}>
          {pasos.map((paso) => (
            <article key={paso.id} className={styles.card}>
              <div className={styles.number}>
                {paso.id}
              </div>

              <div className={styles.icon}>
                {paso.icono}
              </div>

              <h3>{paso.titulo}</h3>

              <p>{paso.descripcion}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;