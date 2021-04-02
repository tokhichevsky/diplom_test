import {TaskTable} from "../../../models/TaskTable.model";

export interface CheckTableProps {
  data: TaskTable[]

  onCellClick?: (boolean, tableIndex: number, taskIndex: number, isTablesEnded?: boolean) => void

  showCorrectAnswer?: boolean

  className?: string,

  startTableIndex?: number
  startTaskIndex?: number

  disabled?: boolean;
}

export const isDebug = new URLSearchParams(window.location.search).get("debug") !== null;
