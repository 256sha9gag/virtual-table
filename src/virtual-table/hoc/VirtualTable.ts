import {ReactNode} from "react";
import {VT} from "../VT.tsx";

export interface Column<T> {
    header: ReactNode;
    cell: (data: T) => ReactNode;
}

interface VirtualTableProps<T> {
    data: T[];
    footer: ReactNode;
    columns: Column<T>[];
}

export function VirtualTable<T>(props: VirtualTableProps<T>) {
    const { data, footer, columns } = props;
    const virtualTableCore = VT({data, columns, footer});

    return virtualTableCore;
}