import Social from "./Social";
import Avatar from "../img/perfil.jpg.jfif";

import "../styles/components/sidebar.sass";
import Infomartion from "./Information";

const SideBar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="avatar" />
      <p className="title">Desenvolvedor Front-End</p>
      <Social />
      <Infomartion />
      <a
        href="https://www.linkedin.com/in/pedro-henrique-silva-de-morais-3091a619b/"
        className="btn"
        target="_blank"
        rel="noreferrer"
      >
        Ver CV
      </a>
    </aside>
  );
};
export default SideBar;
