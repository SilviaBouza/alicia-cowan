import tallerImg from "../assets/taller religioso.png";
import identidadImg from "../assets/Identidad personal1.png";
import heroImg from "../assets/hero.png";

const obras = [
  {
    id: 1,
    titulo: "Restauración de imágenes",
    lugar: "Taller Alicia Cowan",
    descripcion:
      "Restauración y conservación respetando la historia y los materiales originales.",
    tecnica: "Restauración integral",
    categoria: "Restauración",
    imagen: tallerImg,
  },

  {
    id: 2,
    titulo: "Arte sacro",
    lugar: "Obra de taller",
    descripcion:
      "Intervenciones artesanales realizadas con sensibilidad y precisión.",
    tecnica: "Restauración artística",
    categoria: "Arte sacro",
    imagen: identidadImg,
  },

  {
    id: 3,
    titulo: "Trabajo artesanal",
    lugar: "Taller Alicia Cowan",
    descripcion:
      "Procesos de conservación y creación aplicados al arte religioso.",
    tecnica: "Técnica tradicional",
    categoria: "Trabajo artesanal",
    imagen: heroImg,
  },
];

export default obras;
