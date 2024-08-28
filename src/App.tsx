import { VirtualScrollTable } from "./components/VirtualScrollTable.tsx";
import { Data, people } from "./config/config.ts";
import { IColumns } from "./types/types";

// TODO добавить возможность горизонтального скролла и изменить типизацию для любых компонентов - не только таблиц

const App = () => {
  const columns: IColumns<Data>[] = [
    {
      header: "Имя",
      id: "string",
      cell: (row) => <div>{row.firstName}</div>,
      footer: (row) => <div>{row.firstName}</div>,
      accessorKey: "firstName",
    },
    {
      header: "Фамилия",
      id: "string",
      cell: (row) => <div>{row.lastName}</div>,
      footer: (row) => <div>{row.lastName}</div>,
      accessorKey: "lastName",
    },
  ];

  return (
    <div>
      <h1>Virtual Scroll Table</h1>
      <VirtualScrollTable rows={people} columns={columns} />
    </div>
  );
};

export default App;
