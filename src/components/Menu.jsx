import { ACTIONS } from "../const";
import { TaskContext } from "../context/task";
import { useShowInfo } from "../hooks/useShowInfo";
import { AddTask } from "./AddTask"
import { useContext } from "react";

export function Menu() {

    const { showInfo, changeState, setShowInfo } = useShowInfo();
    const { dispatch } = useContext(TaskContext);

    const deleteAllTask = () => {
        dispatch({ type: ACTIONS.RESET_TASKS });
    }

    return (
        <>

            <nav>
                <button onClick={changeState} data-testid="add-task-btn">Add task</button>
                <button onClick={deleteAllTask}>Reset tasks</button>
            </nav>

            {showInfo && (<AddTask setShowInfo={setShowInfo} />)}

        </>

    )
}