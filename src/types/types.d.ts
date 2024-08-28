import { RefObject } from "react";

export interface Scroll {
  top: number;
  index: number;
  end: number;
}

export interface IVirtualScrollTableProps<Row> {
  rows: Row[];
  rowHeight?: number;
  tableHeight?: number;
}

export interface IUseVirtualScrollArgs {
  options: IVirtualScrollTableProps;
  ref: RefObject<HTMLTableElement>;
}

export interface IUseVirtualScrollReturn {
  scroll: Scroll;
  onScroll: (event: React.UIEvent<HTMLTableElement>) => void;
}
