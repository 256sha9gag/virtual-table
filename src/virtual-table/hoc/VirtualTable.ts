import {VirtualTableConstructor} from "../entity/VirtualTableConstructor.ts";
import {ReactNode} from "react";

interface VirtualTableProps<T> {
    data: T[];
    footer: ReactNode;
}

export function VirtualTable<T>(props: VirtualTableProps<T>) {
    const { data, footer } = props;
    const virtualTable = new VirtualTableConstructor(data, footer);

    return virtualTable.render();
}