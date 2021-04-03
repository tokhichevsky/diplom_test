const beepSound = require("../assets/beep.mp3");

export function playSound() {
  const audio = new Audio();
  audio.src = beepSound.default;
  audio.autoplay = true;
}

export enum TaskTypes {
  Create = "Create",
  Estimate = "Estimate"
}

export interface TestResult {
  tablesScore: TablesScore
  time: number
}

export interface StageResult {
  [interval: number]: {
    [TaskTypes.Create]: TestResult,
    [TaskTypes.Estimate]: TestResult
  }
}

export interface TablesScore {
  correct: number,
  wrong: number
}

export const intervals = [26, 38, 64, 101, 156, 179];
// export const intervals = [1,1];

