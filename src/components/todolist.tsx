import React from 'react';
import {Header} from "./header";
import {UniversalInput} from "./universalInput";
import {ButtonsForFiltering} from "./buttonsForFiltering";
import {FilterType, TaskStateType} from "../App";
import {Task} from "./task";

type TodolistPropsType = {
    task: TaskStateType
    todolistID: string
    title: string
    addNewTask: (todolistID: string, title: string) => void
    changeStatusTask: (todolistID: string, taskID: string, value: boolean) => void
    filter: FilterType
    changeFilterTodo: (todolistID: string, filter: FilterType) => void
}

export const Todolist = ({
                             task,
                             todolistID,
                             title,
                             addNewTask,
                             changeStatusTask,
                             filter,
                             changeFilterTodo
                         }: TodolistPropsType) => {

    const addTask = (title: string) => {
        addNewTask(todolistID, title)
    }
    const changeStatus = (taskID: string, value: boolean) => {
        changeStatusTask(todolistID, taskID, value)
    }
    const changeFilter = (filter: FilterType) => {
        changeFilterTodo(todolistID, filter)
    }

    let taskFiltered = task[todolistID]
    if (filter === 'active') {
        taskFiltered = taskFiltered.filter(f => !f.isDone)
    }
    if (filter === 'completed') {
        taskFiltered = taskFiltered.filter(f => f.isDone)
    }


    return (
        <div>
            <div>
                <Header title={title}/>
            </div>
            <div>
                <UniversalInput callback={addTask}/>
            </div>
            <ul>
                {
                    taskFiltered.map(m => <Task key={m.id}
                                                taskID={m.id}
                                                title={m.title}
                                                isDone={m.isDone}
                                                callback={changeStatus}
                    />)
                }
            </ul>
            <div>
                <ButtonsForFiltering callback={changeFilter}/>
            </div>
        </div>
    );
};