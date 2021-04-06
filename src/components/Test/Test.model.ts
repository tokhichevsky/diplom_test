import {MetronomTypes} from "../../models/Metronom";
import {intervals, TaskTypes} from "../../models/Test.model";
import {ScreenTypes} from "../../models/Screen.model";

export interface TestProps {
  intervals: number[]
  stage: string
  metronom?: MetronomTypes
  nextScreen: ScreenTypes
  isTraining?: boolean,
  hideTables?: boolean,
}

export const defaultProps: Partial<TestProps> = {
  intervals,
};

export const TaskNames = {
  [TaskTypes.Create]: "Создание интервала",
  [TaskTypes.Estimate]: "Оценка интервала"
};


