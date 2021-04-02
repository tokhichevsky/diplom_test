import CSS from "./Table.module.scss";
import {TableProps} from "./Table.model";
import classnames from "classnames";
import React, {useCallback} from "react";

const Table = (props: TableProps) => {
  const cellClickHandler = useCallback((event: React.SyntheticEvent<HTMLTableDataCellElement>) => {
    props.onCellClick
    && props.onCellClick(
      Number(event.currentTarget.dataset.rowIndex), Number(event.currentTarget.dataset.columnIndex)
    );
  }, [props]);
  return (
    <table className={classnames(CSS.Table, {[CSS.Table_hoverable]: props.hoverable}, props.className)}>
      <tr>
        <th>{props.tableName}</th>
        {props.columnNames.map((columnName, index) => <th key={`column_${index}`}>{columnName}</th>)}
      </tr>
      {props.rowNames.map((rowName, rowIndex) => (
        <tr key={`row_${rowIndex}`}>
          <td>{rowName}</td>
          {props.columnNames.map((_, columnIndex) => (
            <td
              key={`cell_${rowIndex}_${columnIndex}`}
              data-row-index={rowIndex}
              data-column-index={columnIndex}
              onClick={cellClickHandler}
            >
              {props.data && props.data[rowIndex][columnIndex]}
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default Table;
