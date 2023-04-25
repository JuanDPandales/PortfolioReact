const header = {
  homepage: ".",
  title: "Portafolio",
};

const about = {
  name: "Juan Pandales",
  role: "Desarrollador Front End",
  description:
    "Me considero una persona alegre, responsable que le gusta desarrollar páginas web, le atrae la tecnología.  Aprendo rápidamente, me gusta el trabajo bien en equipo.",
  resume:
    "https://drive.google.com/file/d/17HvC6j5Hz-JAiqUDJorSTZtbXpvGcyzE/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/juan-pandales/",
    github: "https://github.com/JuanDPandales",
  },
};

const projects = [
  {
    name: "Crud Simple",
    description:
      "Realización de un crud simple en el cual hice uso de los estados y props de React",
    stack: ["React JS", "HTML"],
    sourceCode: "https://github.com/JuanDPandales/crud",
    livePreview: "https://github.com/JuanDPandales/crud",
  },
  {
    name: "Tienda Online",
    description: "CRM pequeño con manejo de sesiones y un carrito de compras",
    stack: ["ReactJS", "PostgreSQL", "Auth0"],
    sourceCode: "https://github.com/JuanDPandales/PERN",
    livePreview: "https://github.com",
  },
];

const skills = [
  "HTML",
  "CSS",
  "PHP",
  "ReactJS",
  "JavaScript",
  "Material UI",
  "PostgreSQL",
  "TailwindCSS",
  "Git",
];

const contact = {
  email: "karpus13@gmail.com",
};

export { header, about, projects, skills, contact };
