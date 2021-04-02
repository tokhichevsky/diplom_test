export interface TaskTable  {
  columnNames: string[],
  rowNames: string[],
  tasks: TaskType[]
}

export interface TaskType {
  text: string,
  answer: [number, number]
}
