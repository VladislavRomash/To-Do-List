import React, {memo, useCallback} from 'react';
import {CheckBox} from './universalComponents/checkBox';
import {ButtonForDelete} from './universalComponents/buttonForDelete';
import {ChangeTitle} from './universalComponents/changeTitle';
import {useDispatch} from 'react-redux';
import {changeStatusTaskAC, changeTitleTaskAC, deleteTaskAC} from '../reducers/task-reducer';
import {TaskType} from '../App';

type TaskPropsType = {
    todolistID: string
    task: TaskType
}

export const Task = memo(({todolistID, task}: TaskPropsType) => {

    const dispatch = useDispatch()

    const changeStatusCheckbox = useCallback((value: boolean) => {
        dispatch(changeStatusTaskAC(todolistID, task.id, value))
    }, [dispatch, todolistID, task.id])
    const deleteTasks = useCallback(() => {
        dispatch(deleteTaskAC(todolistID, task.id))
    }, [dispatch, todolistID, task.id])
    const changeTitleTask = useCallback((value: string) => {
        dispatch(changeTitleTaskAC(todolistID, task.id, value))
    }, [dispatch, todolistID, task.id])

    return (
        <li>
            <CheckBox changeStatusCheckbox={changeStatusCheckbox} initialValue={task.isDone}/>
            <ChangeTitle callback={changeTitleTask} title={task.title}/>
            <ButtonForDelete callback={deleteTasks}/>
        </li>
    );
})