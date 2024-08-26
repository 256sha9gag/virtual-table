import {ReactNode} from "react";
import {Column} from "../hoc/VirtualTable.ts";

export class VirtualTableCore<T> {
    private data: T[];
    private columns: Column<T>[];
    private footer: ReactNode;
    private visibleRows: T[] = [];

    constructor(data: T[], columns: Column<T>[], footer: ReactNode) {
        this.data = data;
        this.columns = columns;
        this.footer = footer;
    }

    public updateVisibleRows(scrollTop: number, clientHeight: number, rowHeight: number) {
        const visibleRowCount = Math.ceil(clientHeight / rowHeight);
        const startIndex = Math.floor(scrollTop / rowHeight);
        const endIndex = startIndex + visibleRowCount;
        this.visibleRows = this.data.slice(startIndex, endIndex);
    }

    public getVisibleRows() {
        return this.visibleRows;
    }

    public getFooter() {
        return this.footer;
    }

    public getColumns() {
        return this.columns;
    }
}