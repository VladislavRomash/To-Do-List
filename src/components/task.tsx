import React from 'react';
import {TaskType} from "../App";
import {Checkbox} from "./universalComponents/checkbox";

type TaskPropsType = {
    task: TaskType
    callback: (taskID: string, value: boolean) => void
}

export const Task = ({task, callback}: TaskPropsType) => {

    const changeStatusCheckbox = (value: boolean) => {
        callback(task.id, value)
    }

    return (
        <li>
            <Checkbox changeStatusCheckbox={changeStatusCheckbox} initialValue={task.isDone}/>
            <span>{task.title}</span>
        </li>
    );
};