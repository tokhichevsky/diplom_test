import {Question} from "../../../../../models/Poll.model";


export interface PollQuestionProps {
  className?: string,
  question: Question
  onChange: (value: boolean) => void,
  value: boolean,
  name: string
}
