import { TaskProvider } from "./context/task";
import { TaskContainer } from "./components/TaskContainer";
import { Menu } from "./components/Menu";
import { TaskCounter } from "./components/TaskCounter";
import { Filter } from "./components/Filter";
import { FilterProvider } from "./context/filter";

function App() {

  return (
    <TaskProvider>
      <FilterProvider>
        <Filter />
        <TaskContainer />
      </FilterProvider>
      <Menu />
      <TaskCounter />
    </TaskProvider>

  )
}

export default App
