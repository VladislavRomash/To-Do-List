import React from 'react';
import {TaskType} from "../App";
import {Checkbox} from "./universalComponents/checkbox";
import {ButtonForDelete} from "./universalComponents/buttonForDelete";

type TaskPropsType = {
    task: TaskType
    callback: (taskID: string, value: boolean) => void
    deleteTas: (taskID: string) => void
}

export const Task = ({task, callback, deleteTas}: TaskPropsType) => {

    const changeStatusCheckbox = (value: boolean) => {
        callback(task.id, value)
    }
    const deleteTasks = () => {
        deleteTas(task.id)
    }

    return (
        <li>
            <Checkbox changeStatusCheckbox={changeStatusCheckbox} initialValue={task.isDone}/>
            <span>{task.title}</span>
            <ButtonForDelete callback={deleteTasks}/>
        </li>
    );
};