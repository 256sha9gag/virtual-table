import {
    VirtualTableConstructorAbstract
} from "../model/VirtualTable.abstract.ts";
import {ReactNode} from "react";

export class VirtualTableConstructor<T> implements VirtualTableConstructorAbstract<T>{
    data: T[];
    footer: ReactNode;

    constructor(data: T[], footer: ReactNode) {
        this.data = data;
        this.footer = footer;
    }

    public render(): ReactNode {
        console.log(this.data, 'data')
        console.log(this.footer, 'footer')
        return this.footer;
    }

}