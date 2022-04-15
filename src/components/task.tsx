import React, {ChangeEvent} from 'react';

type TaskPropsType = {
    taskID: string
    title: string
    isDone: boolean
    callback: (taskID: string, value: boolean) => void
}

export const Task = ({taskID, title, isDone, callback}: TaskPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback(taskID, e.currentTarget.checked)
    }

    return (
        <li>
            <input type="checkbox" checked={isDone} onChange={onChangeHandler}/>
            <span>{title}</span>
        </li>
    );
};