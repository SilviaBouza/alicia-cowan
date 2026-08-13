import styles from './About.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import tallerImg from '../../assets/taller religioso.png';
 

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img 
            src={tallerImg} 
            alt="Taller de restauración Alicia Cowan" /* 1. Corregidas las comillas faltantes en alt */
            className={styles.img} 
          />
        </div>
        <div className={styles.content}>
          <SectionTitle 
            subtitle="Sobre el Taller" 
            title="Tradición, arte y dedicación" 
            center={false} /* 2. Corregidas las comillas faltantes en las props */
          >
            Alicia Cowan desarrolla trabajos de restauración, conservación y creación de obras religiosas, respetando la historia y el valor de cada pieza.
          </SectionTitle>
          <p>
            Cada obra recibe un tratamiento personalizado, utilizando técnicas tradicionales y materiales adecuados para conservar su autenticidad.
          </p>
          <p>
            El objetivo es preservar el patrimonio artístico y espiritual de cada imagen, ofreciendo un trabajo de calidad y respeto por su historia.
          </p>
          <button className={styles.button}> Conocer más </button>
        </div>
      </div>
    </section>
  );
};

export default About;