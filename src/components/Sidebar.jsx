import Avatar from "../img/perfil.jpg.jfif";

import "../styles/components/sidebar.sass";

const SideBar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="avatar" />
      <p className="title">dev</p>
      <p>redes sociais</p>
      <p>info de ctt</p>
      <a href="" className="btn">
        Download CV
      </a>
    </aside>
  );
};
export default SideBar;
