import {HTMLProps} from "react";

export interface SelectProps extends HTMLProps<HTMLSelectElement> {
  options: {text: string, value: string}[]
}
