import React from "react";
import CSS from "./Header.module.scss";
import {useSelector} from "react-redux";
import {selectCurrentScreen} from "../../store/screen/screen.selectors";


const Header = () => {
  const currentScreen = useSelector(selectCurrentScreen);

  return (
    <header className={CSS.Header}>
      <div className={CSS.Header__stripe} />
      <h1 className={CSS.Header__title}>{currentScreen.title}</h1>
    </header>
  );
};

export default Header;
