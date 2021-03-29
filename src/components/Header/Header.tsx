import React from "react";
import CSS from "./Header.module.scss";
import logo from "./assets/logo.svg";
import {useSelector} from "react-redux";
import {selectCurrentScreen} from "../../store/screen/screen.selectors";


const Header = () => {
  const currentScreen = useSelector(selectCurrentScreen);

  return (
    <header className={CSS.Header}>
      <a href="https://spbu.ru">
        <img src={logo} className={CSS.Header__logo} alt="СПбГУ"/>
      </a>
      <div className={CSS.Header__logoDescription}>
        Санкт-Петербургский государственный университет
      </div>
      <h1 className={CSS.Header__title}>{currentScreen.title}</h1>
    </header>
  );
};

export default Header;
