import { useContext } from "react"
import { TaskContext } from "../context/task"


export function TaskCounter() {
    const { tasks } = useContext(TaskContext);
    return (
        <div className="counter">
            {tasks.length}
        </div>
    )
}