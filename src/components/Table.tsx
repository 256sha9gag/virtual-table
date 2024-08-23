import {VirtualTable} from "../virtual-table/hoc/VirtualTable.ts";

interface RowData {
    id: number;
    name: string;
    age: number;
}


export function Footer() {
    return <div>This is the footer</div>;
}

const Table = () => {

    const data: RowData[] = [
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Jane', age: 25 },
        // ...
    ];

    return (
        <div>
            <VirtualTable data={data} footer={Footer()}/>
        </div>
    );
};

export default Table;