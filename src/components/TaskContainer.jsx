
/////////////////////////////////
// INDEX IS NOT A GOOD PRACTICE//
// CHANGE FOR ID IF POSSIBLE   //
/////////////////////////////////

import { useTasks } from "../hooks/useTasks";

export function TaskContainer() {

    const { tasks, handleDelete } = useTasks();
    return (
        <section className="task-container">
            {
                tasks && (tasks.map((task, index) => {
                    return (
                        <div className="task" key={index}> {/*HERE*/}
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