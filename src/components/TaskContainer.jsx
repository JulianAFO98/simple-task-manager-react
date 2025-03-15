import { useContext } from "react"
import { TaskContext } from "../context/task"
import { ACTIONS } from "../const";


export function TaskContainer() {
    const { tasks, dispatch } = useContext(TaskContext);

    const handleDelete = (index) => {
        dispatch({ type: ACTIONS.REMOVE_TASK, payload: index })
    }

    return (
        <section className="task-container">
            {
                tasks && (tasks.map((task, index) => {
                    return (
                        <div className="task" key={index}>
                            <div>
                                <button onClick={() => handleDelete(index)}>x</button>
                            </div>
                            <h2>{task.title}</h2>
                            <h3>{task.type}</h3>
                            <p>{task.description}</p>
                        </div>
                    )
                }))
            }
        </section>
    )
}