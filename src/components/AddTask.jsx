import { useContext } from "react";
import { TaskContext } from "../context/task";
import { ACTIONS } from "../const";



export function AddTask({ setShowInfo }) {
    const { tasks, dispatch } = useContext(TaskContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const task = {};
        formData.forEach((value, key) => {
            task[key] = value;
        });
        dispatch({ type: ACTIONS.ADD_TASK, payload: task })

    }

    return (
        <div className="add-task">
            <button className="close-btn" onClick={() => setShowInfo(false)}>X</button>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task-name">Task name:</label>
                <input type="text" id="task-name" name="title" />
                <label htmlFor="task-select">Task type:</label>
                <select id="task-select" name="type">
                    <option value="shopping">Shopping</option>
                    <option value="exercises">Exercises</option>
                    <option value="cleaning">Cleaning</option>
                    <option value="work">Work</option>
                    <option value="study">Study</option>
                </select>
                <label htmlFor="task-description">Task description:</label>
                <textarea id="task-description" name="description"></textarea>
                <button className="form-button" type="submit">Guardar</button>
            </form>
        </div>
    )

}