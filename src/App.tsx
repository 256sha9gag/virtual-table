import { VirtualScrollTable } from "./components/VirtualScrollTable.tsx";
import { people } from "./config/config.ts";

// TODO добавить возможность горизонтального скролла и изменить типизацию для любых компонентов - не только таблиц

const App = () => {
  return (
    <div>
      <h1>Virtual Scroll Table</h1>
      <VirtualScrollTable rows={people} />
    </div>
  );
};

export default App;
