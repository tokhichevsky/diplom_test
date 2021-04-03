import React from "react";
import {useSelector} from "react-redux";
import {selectCurrentScreen} from "../../store/screen/screen.selectors";
import {ScreenMap} from "./ScreenMap";
import CSS from "./Screen.module.scss";


const Screen = () => {
  const currentScreenElement = useSelector(selectCurrentScreen)
  const CurrentScreen = ScreenMap.getComponent(currentScreenElement.token);

  return (
    <div className={CSS.Screen}>
      <CurrentScreen />
    </div>
  )
}

export default Screen;
