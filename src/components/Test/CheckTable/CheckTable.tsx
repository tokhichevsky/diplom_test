import Table from "../../UI/Table/Table";
import {CheckTableProps, isDebug} from "./CheckTable.model";
import {useCallback, useMemo, useRef, useState} from "react";
import Instruction from "../Instruction/Instruction";
import CSS from "./CheckTable.module.scss";
import classnames from "classnames";
import {serverLogRequest} from "../../../api";

const CheckTable = (props: CheckTableProps) => {
  const isTablesEndedRef = useRef(props.startTaskIndex > 3 || props.startTableIndex >= props.data.length);
  const [currentTableIndex, setCurrentTableIndex] = useState(props.startTableIndex ?? 0);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(props.startTaskIndex ?? 0);
  const [correctRowIndex, correctColumnIndex] = props.data[currentTableIndex]?.tasks[currentTaskIndex]?.answer || [undefined, undefined];
  const maxTasks = props.data[0].tasks.length;
  const cellClickHandler = useCallback((rowIndex, columnIndex) => {
    if (!props.disabled) {
      let newTableIndex = currentTableIndex;
      let newTaskIndex = currentTaskIndex;
      if (currentTableIndex + 1 < props.data.length) {
        newTableIndex += 1;
      } else if (currentTaskIndex + 1 < maxTasks) {
        newTaskIndex += 1;
        newTableIndex = 0;
      } else {
        newTableIndex += 1;
        isTablesEndedRef.current = true;
      }
      isDebug && serverLogRequest(
        `${props.data[currentTableIndex].tasks[currentTaskIndex].text}\n  [${currentTableIndex}, ${currentTaskIndex}]: ${rowIndex} ${columnIndex}`
      );
      setCurrentTableIndex(newTableIndex);
      setCurrentTaskIndex(newTaskIndex);
      props.onCellClick
      && props.onCellClick(correctRowIndex === rowIndex && correctColumnIndex === columnIndex, newTableIndex, newTaskIndex);

    }
  }, [correctColumnIndex, correctRowIndex, currentTableIndex, currentTaskIndex, maxTasks, props]);


  let tableData = useMemo(() => {
    let data = undefined;
    if ((props.showCorrectAnswer || isDebug) && !isTablesEndedRef.current) {
      data = [];
      for (let i = 0; i < props.data[currentTableIndex].rowNames.length; i++) {
        const row = [];
        for (let j = 0; j < props.data[currentTableIndex].columnNames.length; j++) {
          if (i === correctRowIndex && j === correctColumnIndex) {
            row.push("✹");
          } else {
            row.push("");
          }
        }
        data.push(row);
      }
    }

    return data;
  }, [correctColumnIndex, correctRowIndex, currentTableIndex, props.data, props.showCorrectAnswer]);


  if (!isTablesEndedRef.current) {
    return (
      <div className={classnames(CSS.CheckTable)}>
        <Instruction
          key={`table_task_${currentTableIndex}`}
          className={CSS.CheckTable__task}
        >
          {props.data[currentTableIndex].tasks[currentTaskIndex].text}
        </Instruction>
        <div className={CSS.CheckTable__tableContainer}>
          <Table
            className={props.className}
            key={`check_table_${currentTableIndex}`}
            columnNames={props.data[currentTableIndex].columnNames}
            rowNames={props.data[currentTableIndex].rowNames}
            onCellClick={cellClickHandler}
            hoverable={!props.disabled}
            data={tableData}
          />
        </div>
      </div>
    );
  }
};

export default CheckTable;
