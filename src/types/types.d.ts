import { ReactNode, RefObject, UIEvent } from "react";

export interface IScroll {
  top: number;
  index: number;
  end: number;
}

export interface IVirtualScrollTableProps<Row> {
  rows: Row[];
  rowHeight?: number;
  tableHeight?: number;
  columns: IColumns<Row>[];
}

export interface IUseVirtualScrollArgs {
  options: IVirtualScrollTableProps;
  ref: RefObject<HTMLTableElement>;
}

export interface IUseVirtualScrollReturn {
  scroll: IScroll;
  onScroll: (event: UIEvent<HTMLTableElement>) => void;
}

export interface IColumns<Row> {
  header: string;
  id: string;
  cell: (row: Row) => ReactNode;
  footer?: (row: Row) => ReactNode;
  accessorKey: string;
}
