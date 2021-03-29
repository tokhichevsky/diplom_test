import {Metronom} from "./Metronom";

const beepSound = require("../assets/beep.mp3");
const clickSound = require("../assets/click.wav");

export const Sounds = {
  Beep: beepSound.default,
  Click: clickSound.default
};

export function playSound(src: string) {
  const audio = new Audio();
  audio.src = clickSound.default;
  audio.autoplay = true;
}

const isEven = Math.round(Math.random()) === 1;

export const metronom = new Metronom(isEven ? 140 : 35);
