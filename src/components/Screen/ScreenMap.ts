import {ScreenElement, ScreenTypes} from "../../models/Screen.model";
import Start from "./screens/Start/Start";
import Warning from "./screens/Warning/Warning";
import Poll from "./screens/Poll/Poll";
import React from "react";
import SignUp from "./screens/SignUp/SignUp";
import ChooseTest from "./screens/ChooseTest/ChooseTest";
import PollInfo from "./screens/PollInfo/PollInfo";
import PollFinish from "./screens/PollFinish/PollFinish";
import TestInfo1 from "./screens/TestInfo1/TestInfo1";
import TestInfo2 from "./screens/TestInfo2/TestInfo2";
import TestExample from "./screens/TestExample/TestExample";
import TestTrainingInfo from "./screens/TestTrainingInfo/TestTrainingInfo";

type ScreenMapElement = {
  ScreenComponent: React.JSXElementConstructor<any>;
  title: string
}

export const ScreenMap: {
  _screens: { [name: string]: ScreenMapElement }
  get: (screenType: ScreenTypes) => ScreenElement
  getComponent: (screenType: ScreenTypes) => React.JSXElementConstructor<any>
} = {
  _screens: {
    [ScreenTypes.Start]: {
      ScreenComponent: Start,
      title: "Начало"
    },
    [ScreenTypes.Warning]: {
      ScreenComponent: Warning,
      title: "Начало"
    },
    [ScreenTypes.Poll]: {
      ScreenComponent: Poll,
      title: "Определение ведущего типа восприятия"
    },
    [ScreenTypes.PollInfo]: {
      ScreenComponent: PollInfo,
      title: "Об определении ведущего типа восприятия"
    },
    [ScreenTypes.PollFinish]: {
      ScreenComponent: PollFinish,
      title: "Определение ведущего типа восприятия"
    },
    [ScreenTypes.SignUp]: {
      ScreenComponent: SignUp,
      title: "Расскажите немного о себе"
    },
    [ScreenTypes.ChooseTest]: {
      ScreenComponent: ChooseTest,
      title: "Выберите тест"
    },
    [ScreenTypes.TestInfo1]: {
      ScreenComponent: TestInfo1,
      title: null
    },
    [ScreenTypes.TestInfo2]: {
      ScreenComponent: TestInfo2,
      title: null
    },
    [ScreenTypes.TestExample]: {
      ScreenComponent: TestExample,
      title: null
    },
    [ScreenTypes.TestTrainingInfo]: {
      ScreenComponent: TestTrainingInfo,
      title: null
    }
  },

  get(screenType: ScreenTypes, withoutComponent = true) {
    const {ScreenComponent, ...params} = this._screens[screenType];
    console.log(params)
    return {
      token: screenType,
      ...params,
    };
  },

  getComponent(screenType: ScreenTypes) {
    return this._screens[screenType].ScreenComponent;
  }
};
