import { TaskProvider } from "./context/task";
import { TaskContainer } from "./components/TaskContainer";
import { Menu } from "./components/Menu";
import { TaskCounter } from "./components/TaskCounter";

function App() {

  return (
    <TaskProvider>
      <TaskContainer />
      <Menu />
      <TaskCounter />
    </TaskProvider>

  )
}

export default App
