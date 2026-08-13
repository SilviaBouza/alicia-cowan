import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

import styles from "./WhatsAppButton.module.css";


const WhatsAppButton = () => {

  const [mostrarMensaje, setMostrarMensaje] = useState(false);


  useEffect(() => {

    const timer = setTimeout(() => {
      setMostrarMensaje(true);
    }, 4000);


    const cerrar = setTimeout(() => {
      setMostrarMensaje(false);
    }, 10000);


    return () => {
      clearTimeout(timer);
      clearTimeout(cerrar);
    };

  }, []);



  const telefono = "541162948947";


  const mensaje = encodeURIComponent(
    "Hola Alicia, quisiera realizar una consulta sobre una obra o restauración."
  );


  return (

    <div className={styles.wrapper}>


      {mostrarMensaje && (

        <div className={styles.message}>

          <strong>
            ¿Necesitas asesoramiento?
          </strong>

          <span>
            Escríbenos por WhatsApp
          </span>

        </div>

      )}



      <a

        href={`https://wa.me/${telefono}?text=${mensaje}`}

        target="_blank"

        rel="noopener noreferrer"

        className={styles.whatsapp}

        aria-label="Contactar por WhatsApp"

      >

        <FaWhatsapp />

      </a>


    </div>

  );

};


export default WhatsAppButton;