import React from 'react';
import {Header} from "./header";
import {UniversalInput} from "./universalComponents/universalInput";
import {ButtonsForFiltering} from "./universalComponents/buttonsForFiltering";
import {FilterType, TaskStateType, TodolistType} from "../App";
import {Task} from "./task";
import {ButtonForDelete} from "./universalComponents/buttonForDelete";
import s from './module_css/todolist.module.css'

type TodolistPropsType = {
    task: TaskStateType
    todolist: TodolistType
    addNewTask: (todolistID: string, title: string) => void
    changeStatusTask: (todolistID: string, taskID: string, value: boolean) => void
    changeFilterTodo: (todolistID: string, filter: FilterType) => void
    deleteTask: (todolistID: string, taskID: string) => void
    deleteTodolist: (todolistID: string) => void
}

export const Todolist = ({
                             task,
                             todolist,
                             addNewTask,
                             changeStatusTask,
                             changeFilterTodo,
                             deleteTask,
                             deleteTodolist,
                         }: TodolistPropsType) => {

    const addTask = (title: string) => {
        addNewTask(todolist.id, title)
    }
    const deleteTasks = (taskID: string) => {
        deleteTask(todolist.id, taskID)
    }
    const changeStatus = (taskID: string, value: boolean) => {
        changeStatusTask(todolist.id, taskID, value)
    }
    const deleteTodo = () => {
        deleteTodolist(todolist.id)
    }
    const changeFilter = (filter: FilterType) => {
        changeFilterTodo(todolist.id, filter)
    }

    let taskFiltered = task[todolist.id]
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