import React from 'react';
import {TaskType} from "../App";
import {CheckBox} from "./universalComponents/checkBox";
import {ButtonForDelete} from "./universalComponents/buttonForDelete";
import {ChangeTitle} from "./universalComponents/changeTitle";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {changeStatusTaskAC, changeTitleTaskAC, deleteTaskAC} from "../reducers/task-reducer";

type TaskPropsType = {
    todolistID: string
    taskID: string
}

export const Task = ({todolistID, taskID}: TaskPropsType) => {

    const task = useSelector<AppRootStateType, TaskType>(state => state.tasks[todolistID]
        .filter(f => f.id === taskID)[0])
    const dispatch = useDispatch()

    const changeStatusCheckbox = (value: boolean) => {
        dispatch(changeStatusTaskAC(todolistID, taskID, value))
    }
    const deleteTasks = () => {
        dispatch(deleteTaskAC(todolistID, taskID))
    }
    const changeTitleTask = (value: string) => {
        dispatch(changeTitleTaskAC(todolistID, taskID, value))
    }

    return (
        <li>
            <CheckBox changeStatusCheckbox={changeStatusCheckbox} initialValue={task.isDone}/>
            <ChangeTitle callback={changeTitleTask} title={task.title}/>
            <ButtonForDelete callback={deleteTasks}/>
        </li>
    );
};