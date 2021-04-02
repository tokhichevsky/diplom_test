export interface TableProps {
  tableName?: string
  columnNames: string[]
  rowNames: string[]
  className?: string,
  hoverable?: boolean
  onCellClick?: (rowIndex: number, columnIndex: number) => void
  data?: string[][]
}
