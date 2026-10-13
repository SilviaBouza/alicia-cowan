import { useState } from "react";

import {
  FaChurch,
  FaMonument,
  FaGem,
  FaPaintBrush,
  FaClone,
  FaHandsHelping,
} from "react-icons/fa";

import styles from "./Services.module.css";

import cristoImg from "../../assets/Cristo 1.60mt.jpg";
import esculturaImg from "../../assets/hero1.jpg";

const servicios = [
  {
    id: 1,
    icono: <FaChurch />,
    titulo: "Restauración de imágenes religiosas",
    imagen: cristoImg,
    descripcion:
      "Conservamos su valor histórico, artístico y espiritual.",
    detalle:
      "Recuperamos imágenes religiosas deterioradas por el paso del tiempo, intervenciones anteriores o diferentes tipos de daños. Cada pieza es estudiada individualmente para respetar sus materiales, técnicas, colores y características originales.",
    proceso:
      "Evaluación de la pieza · Limpieza · Reparación · Reconstrucción de faltantes · Policromía · Terminación",
    categoria: "restauracion",
  },

  {
    id: 2,
    icono: <FaMonument />,
    titulo: "Restauración de esculturas",
    imagen: esculturaImg,
    descripcion:
      "Intervenciones precisas para devolver estabilidad y belleza original.",
    detalle:
      "Realizamos trabajos de restauración sobre esculturas religiosas y profanas, atendiendo tanto los aspectos estructurales como los estéticos. Cada intervención se adapta a las características, materiales y estado de conservación de la obra.",
    proceso:
      "Evaluación · Limpieza · Consolidación · Reparación · Reconstrucción · Terminación artística",
    categoria: "esculturas",
  },

  {
    id: 3,
    icono: <FaGem />,
    titulo: "Dorado a la hoja",
    imagen: null,
    descripcion:
      "Técnicas tradicionales de dorado en pan de oro de 24k.",
    detalle:
      "Aplicamos técnicas tradicionales de dorado a la hoja para recuperar o realizar terminaciones de gran riqueza visual. El procedimiento puede aplicarse sobre imágenes, retablos, marcos, ornamentos y diferentes elementos destinados al culto y al patrimonio artístico.",
    proceso:
      "Preparación · Base de bol · Aplicación de la hoja · Asentado · Bruñido · Protección final",
    categoria: "dorado",
  },

  {
    id: 4,
    icono: <FaPaintBrush />,
    titulo: "Policromía",
    imagen: null,
    descripcion:
      "Recuperación y aplicación de policromías con criterios artísticos y técnicos.",
    detalle:
      "Realizamos y recuperamos policromías mediante técnicas tradicionales, buscando devolver a cada pieza sus tonalidades, matices y detalles característicos. El trabajo se adapta al estilo y naturaleza de cada obra.",
    proceso:
      "Preparación de superficie · Base de color · Aplicación de pigmentos · Detalles · Veladuras · Terminación",
    categoria: "policromia",
  },

  {
    id: 5,
    icono: <FaClone />,
    titulo: "Réplicas",
    imagen: null,
    descripcion:
      "Réplicas fieles realizadas con materiales nobles y técnicas artesanales.",
    detalle:
      "Realizamos réplicas artesanales de imágenes y piezas religiosas a partir de modelos, fotografías o referencias existentes. Buscamos reproducir cuidadosamente las formas, proporciones, detalles ornamentales y acabados de la pieza original.",
    proceso:
      "Estudio del modelo · Diseño · Modelado · Preparación · Policromía · Terminación",
    categoria: "replicas",
  },

  {
    id: 6,
    icono: <FaHandsHelping />,
    titulo: "Obras por encargo",
    imagen: null,
    descripcion:
      "Proyectos personalizados para instituciones y particulares.",
    detalle:
      "Desarrollamos obras especialmente pensadas para cada proyecto. Se trabaja de manera personalizada desde la definición de la pieza hasta la elección de materiales, dimensiones, colores y terminaciones.",
    proceso:
      "Consulta · Diseño · Definición de materiales · Elaboración artesanal · Terminaciones · Entrega",
    categoria: "encargos",
  },
];

const Services = () => {
  const [servicioActivo, setServicioActivo] = useState(null);

  const toggleServicio = (id) => {
    setServicioActivo(
      servicioActivo === id ? null : id
    );
  };

  return (
    <section
      className={styles.services}
      id="servicios"
    >
      <div className={styles.container}>

        {/* ENCABEZADO */}

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

          <p className={styles.intro}>
            Conservación, restauración y creación artesanal
            de imágenes y obras de arte, con respeto por las
            técnicas tradicionales y la identidad de cada pieza.
          </p>

        </div>


        {/* SERVICIOS */}

        <div className={styles.servicesList}>

          {servicios.map((servicio, index) => {

            const activo =
              servicioActivo === servicio.id;

            return (
              <article
                key={servicio.id}
                className={`${styles.serviceItem} ${
                  activo ? styles.active : ""
                }`}
              >

                <div className={styles.serviceMain}>

                  {/* IMAGEN */}

                  <div className={styles.imageWrapper}>

                    {servicio.imagen ? (
                      <img
                        src={servicio.imagen}
                        alt={servicio.titulo}
                      />
                    ) : (
                      <div className={styles.imagePlaceholder}>

                        <div className={styles.placeholderIcon}>
                          {servicio.icono}
                        </div>

                        <span>
                          Imagen del servicio
                        </span>

                      </div>
                    )}

                    <span className={styles.number}>
                      0{index + 1}
                    </span>

                  </div>


                  {/* CONTENIDO */}

                  <div className={styles.content}>

                    <div className={styles.serviceIcon}>
                      {servicio.icono}
                    </div>

                    <h3>
                      {servicio.titulo}
                    </h3>

                    <p className={styles.shortDescription}>
                      {servicio.descripcion}
                    </p>

                    <button
                      type="button"
                      className={styles.detailButton}
                      onClick={() =>
                        toggleServicio(servicio.id)
                      }
                      aria-expanded={activo}
                    >
                      {activo
                        ? "Cerrar información"
                        : "Ver información"}

                      <span>
                        {activo ? "↑" : "→"}
                      </span>
                    </button>

                  </div>

                </div>


                {/* INFORMACIÓN AMPLIADA */}

                {activo && (
                  <div className={styles.expanded}>

                    <div className={styles.expandedText}>

                      <span className={styles.expandedLabel}>
                        Sobre este servicio
                      </span>

                      <p>
                        {servicio.detalle}
                      </p>

                    </div>


                    <div className={styles.process}>

                      <span className={styles.expandedLabel}>
                        Proceso de trabajo
                      </span>

                      <p>
                        {servicio.proceso}
                      </p>

                    </div>


                    <a
                      href={`/obras?categoria=${servicio.categoria}`}
                      className={styles.worksLink}
                    >
                      Ver obras relacionadas
                      <span>→</span>
                    </a>

                  </div>
                )}

              </article>
            );
          })}

        </div>


        {/* BOTÓN GENERAL */}

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