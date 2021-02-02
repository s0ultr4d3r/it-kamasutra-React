import { React } from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://plugins.jetbrains.com/files/10321/100456/icon/pluginIcon.svg" />
    </header>
  );
};

export default Header;
