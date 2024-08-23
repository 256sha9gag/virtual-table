import {ReactNode} from "react";

export abstract class VirtualTableConstructorAbstract<T> {
    abstract data: T[];
    abstract footer: ReactNode;


    abstract render(): ReactNode
}

