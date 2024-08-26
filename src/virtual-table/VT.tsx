import  {ReactNode, useEffect, useRef} from "react";
import {Column} from "./hoc/VirtualTable.ts";
import {VirtualTableCore} from "./entity/VirtualTableConstructor.ts";

interface VirtualTableProps<T> {
    data: T[];
    columns: Column<T>[];
    footer: ReactNode;
}

export function VT<T>(props: VirtualTableProps<T>) {
    const { data, columns, footer } = props;
    const tableRef = useRef<HTMLTableElement>(null);
    const virtualTableCore = useRef(new VirtualTableCore(data, columns, footer));

    useEffect(() => {
        const table = tableRef.current;
        if (!table) return;

        const handleScroll = () => {
            virtualTableCore.current.updateVisibleRows(
                table.scrollTop,
                table.clientHeight,
                table.rows[0].clientHeight
            );
            table.querySelector("tbody")!.innerHTML = "";
            for (const item of virtualTableCore.current.getVisibleRows()) {
                const tr = document.createElement("tr");
                for (const column of virtualTableCore.current.getColumns()) {
                    const td = document.createElement("td");
                    td.textContent = column.cell(item)?.toString() ?? "";
                    tr.appendChild(td);
                }
                table.querySelector("tbody")!.appendChild(tr);
            }
        };

        table.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            table.removeEventListener("scroll", handleScroll);
        };
    }, [data, columns, footer]);

    return (
        <table ref={tableRef}>
            <thead>
            <tr>
                {virtualTableCore.current.getColumns().map((column, index) => (
                    <th key={index}>{column.header}</th>
                ))}
            </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
            <tr>
                <td colSpan={virtualTableCore.current.getColumns().length}>
                    {virtualTableCore.current.getFooter()}
                </td>
            </tr>
            </tfoot>
        </table>
    );
}