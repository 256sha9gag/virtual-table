import { useRef } from "react";
import { useVirtualScroll } from "../hooks/useVirtualScroll.ts";
import { IVirtualScrollTableProps } from "../types/types";

export function VirtualScrollTable<Row>({
  rows,
  columns,
  rowHeight = 35,
  tableHeight = 200,
}: IVirtualScrollTableProps<Row>) {
  const tableRef = useRef<HTMLTableElement>(null);

  const { scroll, onScroll } = useVirtualScroll({
    ref: tableRef,
    options: { rows, rowHeight, tableHeight },
  });

  const generateRows = () => {
    const items: JSX.Element[] = [];
    let index = Math.max(
      0,
      scroll.index - Math.ceil((tableHeight * 2) / rowHeight),
    );
    const end = Math.min(
      scroll.end + Math.ceil((tableHeight * 2) / rowHeight),
      rows.length,
    );

    do {
      if (index >= rows.length) {
        index = rows.length;
        break;
      }

      const rowAttrs = {
        style: {
          position: "absolute" as const,
          top: index * rowHeight,
          left: 0,
          height: rowHeight,
          lineHeight: `${rowHeight}px`,
        },
      };

      items.push(
        <tr {...rowAttrs} key={index}>
          {columns.map((column, i) => (
            <td key={i}>{column.cell(rows[index])}</td>
          ))}
        </tr>,
      );

      index++;
    } while (index < end);

    return items;
  };

  return (
    <div className="wrapper">
      <table>
        <thead>
          <tr className="tr">
            {columns.map((column, i) => (
              <th key={i}>{column.header}</th>
            ))}
          </tr>
        </thead>
      </table>
      <table
        ref={tableRef}
        className="table-content"
        style={{ height: tableHeight }}
        onScroll={onScroll}
      >
        <tbody
          style={{
            position: "relative",
            display: "inline-block",
            height: rows.length * rowHeight,
            maxHeight: rows.length * rowHeight,
            width: "100%",
          }}
        >
          {generateRows()}
        </tbody>
      </table>
    </div>
  );
}
