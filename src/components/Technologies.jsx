import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiGithub,
  DiReact,
  DiPython,
  DiSass,
  DiDart,
} from "react-icons/di";
import { RiFlutterFill } from "react-icons/ri";

import { SiStyledcomponents } from "react-icons/si";
import "../styles/components/techs.sass";

const technologies = [
  {
    id: "html",
    name: "HTML5",
    icon: <DiHtml5 />,
    text: "Trabalho utilizando o HTML como uma linguagem de marcação desde 2021.",
  },
  {
    id: "css",
    name: "CSS3",
    icon: <DiCss3 />,
    text: "Trabalho utilizando o CSS como estilização desde 2021.",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <DiJsBadge />,
    text: "Trabalho utilizando JavaScript para criar páginas dinamicas desde 2021.",
  },

  {
    id: "react",
    name: "React",
    icon: <DiReact />,
    text: "Trabalho com a biblioteca ReactJS desde 2021. Pouco tempo comecei a utilizar o NextJS",
  },
  {
    id: "styled",
    name: "Styled Components",
    icon: <SiStyledcomponents />,
    text: "Trabalho com a biblioteca Styled Components desde 2021.",
  },
  {
    id: "dart",
    name: "Dart",
    icon: <DiDart />,
    text: "Trabalho com a linguagem Dart desde 2022.",
  },
  {
    id: "flutter",
    name: "Flutter",
    icon: <RiFlutterFill />,
    text: "Trabalho com a biblioteca Flutter desde 2022.",
  },
  {
    id: "python",
    name: "Python",
    icon: <DiPython />,
    text: "Utilizo Python para programar algumas coisas desde 2022.",
  },
  {
    id: "sass",
    name: "Sass",
    icon: <DiSass />,
    text: "Utilizo Sass para estilizar desde 2022.",
  },
  {
    id: "github",
    name: "Github",
    icon: <DiGithub />,
    text: "Utilizo Github para subir meus projetos desde 2021.",
  },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
