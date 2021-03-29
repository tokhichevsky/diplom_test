import {ChangeEvent} from "react";

export interface RadioButtonProps {
  id: string,
  className?: string,
  name: string,
  text: string,
  value: boolean,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
