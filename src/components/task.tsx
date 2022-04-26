import React, {memo, useCallback} from 'react';
import {CheckBox} from './universalComponents/checkBox';
import {ButtonForDelete} from './universalComponents/buttonForDelete';
import {ChangeTitle} from './universalComponents/changeTitle';
import {useDispatch} from 'react-redux';
import {changeStatusTaskAC, changeTitleTaskAC, deleteTaskAC} from '../reducers/task-reducer';

type TaskPropsType = {
    todolistID: string
    taskID: string
    title: string
    isDone: boolean
}

export const Task = memo(({todolistID, taskID, title, isDone}: TaskPropsType) => {

    const dispatch = useDispatch()

    const changeStatusCheckbox = useCallback((value: boolean) => {
        dispatch(changeStatusTaskAC(todolistID, taskID, value))
    }, [dispatch, todolistID, taskID])
    const deleteTasks = useCallback(() => {
        dispatch(deleteTaskAC(todolistID, taskID))
    }, [dispatch, todolistID, taskID])
    const changeTitleTask = useCallback((value: string) => {
        dispatch(changeTitleTaskAC(todolistID, taskID, value))
    }, [dispatch, todolistID, taskID])

    return (
        <li>
            <CheckBox changeStatusCheckbox={changeStatusCheckbox} initialValue={isDone}/>
            <ChangeTitle callback={changeTitleTask} title={title}/>
            <ButtonForDelete callback={deleteTasks}/>
        </li>
    );
})