import { useContext, useEffect } from "react";
import { TaskContext } from "../context/task";
import { ACTIONS } from "../const";

export function useTasks() {
    const { tasks, dispatch } = useContext(TaskContext);

    const handleDelete = (index) => {
        dispatch({ type: ACTIONS.REMOVE_TASK, payload: index })
    }

    useEffect(() => {
        localStorage.setItem("task-data", JSON.stringify(tasks));
    }, [tasks]);

    return { tasks, handleDelete }
}