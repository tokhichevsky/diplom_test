import tables from "../../../../models/tables";
import CheckTable from "../../../Test/CheckTable/CheckTable";

const DebugTables = () => {
  return (
    <CheckTable
      data={tables}
      // onCellClick={cellClickHandler}
      // startTableIndex={currentTableIndex}
      // startTaskIndex={currentTaskIndex}
      // disabled={isEnded}
    />
  );
};

export default DebugTables;
