import {playSound, Sounds} from "../../../models/Test.model";

export interface IntervalButtonProps {
  onChange?: ([start, end]: [number, number]) => void,
  className?: string
}

export const playBeepSound = playSound.bind(null, Sounds.Beep)
