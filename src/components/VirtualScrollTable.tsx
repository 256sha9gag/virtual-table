import { useRef } from "react";
import { useVirtualScroll } from "../hooks/useVirtualScroll.ts";
import { IVirtualScrollTableProps } from "../types/types";

export function VirtualScrollTable<Row>({
  rows,
  rowHeight = 35,
  tableHeight = 200,
}: IVirtualScrollTableProps<Row>) {
  const columns = Object.keys(rows[0]);
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
          {/*{columns.map((column: string | number, i) => (
            <td key={i}>
              {(rows[index] as Record<string, string>)[column].toString()}
            </td>
          ))}*/}
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
            {columns.map((name, i) => (
              <th key={i}>{name}</th>
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
