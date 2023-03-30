import React from "react";
import SideBar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import "./styles/components/app.sass";

const App = () => {
  return (
    <div id="main">
      <h1>Pedro Morais</h1>
      <SideBar />
      <MainContent />
    </div>
  );
};
export default App;
