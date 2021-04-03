import tables from "../../../../models/tables";
import CheckTable from "../../../Test/CheckTable/CheckTable";

const DebugTables = () => {
  return (
    <CheckTable
      data={tables}
    />
  );
};

export default DebugTables;
