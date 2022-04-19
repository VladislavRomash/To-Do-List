import React from 'react';
import {Header} from "./header";
import {UniversalInput} from "./universalComponents/universalInput";
import {ButtonsForFiltering} from "./universalComponents/buttonsForFiltering";
import {FilterType, TaskType, TodolistType} from "../App";
import {Task} from "./task";
import {ButtonForDelete} from "./universalComponents/buttonForDelete";
import s from './module_css/todolist.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {addTaskAC, changeStatusTaskAC, deleteTaskAC} from "../reducers/task-reducer";
import {changeFilterTodoAC, deleteTodoAC} from "../reducers/todolist-reducer";

type TodolistPropsType = {
    todolist: TodolistType
}

export const Todolist = ({todolist}: TodolistPropsType) => {

    let task = useSelector<AppRootStateType, TaskType[]>(state => state.tasks[todolist.id])
    const dispatch = useDispatch()

    const addTask = (title: string) => {
        dispatch(addTaskAC(todolist.id, title))
    }
    const deleteTasks = (taskID: string) => {
        dispatch(deleteTaskAC(todolist.id, taskID))
    }
    const changeStatus = (taskID: string, value: boolean) => {
        dispatch(changeStatusTaskAC(todolist.id, taskID, value))
    }
    const deleteTodo = () => {
        dispatch(deleteTodoAC(todolist.id))
    }
    const changeFilter = (filter: FilterType) => {
        dispatch(changeFilterTodoAC(todolist.id, filter))
    }

    let taskFiltered = task
    if (todolist.filter === 'active') {
        taskFiltered = taskFiltered.filter(f => !f.isDone)
    }
    if (todolist.filter === 'completed') {
        taskFiltered = taskFiltered.filter(f => f.isDone)
    }

    return (
        <div>
            <div className={s.header}>
                <Header title={todolist.title}/>
                <ButtonForDelete callback={deleteTodo}/>
            </div>
            <div>
                <UniversalInput callback={addTask}/>
            </div>
            <ul>
                {
                    taskFiltered.map(m => <Task key={m.id}
                                                task={m}
                                                callback={changeStatus}
                                                deleteTas={deleteTasks}
                    />)
                }
            </ul>
            <div>
                <ButtonsForFiltering callback={changeFilter}/>
            </div>
        </div>
    );
};