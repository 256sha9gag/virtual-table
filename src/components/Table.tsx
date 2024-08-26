import {Column, VirtualTable} from "../virtual-table/hoc/VirtualTable.ts";

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

    const columns: Column<RowData>[] = [
        {
            header: "ID",
            cell: (data) => data.id,
        },
        {
            header: "Name",
            cell: (data) => data.name,
        },
        {
            header: "Age",
            cell: (data) => data.age,
        },
    ];

    return (
        <div>
            <VirtualTable data={data} footer={Footer()} columns={columns}/>
        </div>
    );
};

export default Table;