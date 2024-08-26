import {ReactNode} from "react";
import {Column} from "../hoc/VirtualTable.ts";

export abstract class VirtualTableConstructorAbstract<T> {
    abstract data: T[];
    abstract footer: ReactNode;
    abstract columns: Column<T>[];


    abstract render(): ReactNode
}

