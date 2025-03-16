import { useContext, useEffect } from "react";
import { TaskContext } from "../context/task";
import { ACTIONS } from "../const";
import { FilterContext } from "../context/filter";

export function useTasks() {
    const { tasks, dispatch } = useContext(TaskContext);
    const { filters } = useContext(FilterContext);

    const handleDelete = (index) => {
        dispatch({ type: ACTIONS.REMOVE_TASK, payload: index })
    }

    useEffect(() => {
        localStorage.setItem("task-data", JSON.stringify(tasks));
    }, [tasks]);



    const filteredTasks = tasks.filter(task => {
        return filters === "all" ? true : (task.type === filters);
    });


    return { tasks: filteredTasks, handleDelete }
}