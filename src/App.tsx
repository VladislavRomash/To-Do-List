import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/todolist";
import {v1} from "uuid";

export type FilterType = 'all' | 'active' | 'completed'
export type TodolistType = {
    id: string
    title: string
    filter: FilterType
}
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type TaskStateType = {
    [key: string]: TaskType[]
}

export const App = () => {
    const todolistID1 = v1()

    const [todolist, setTodolist] = useState<TodolistType[]>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
    ])
    const [task, setTask] = useState<TaskStateType>({
        [todolistID1]: [
            {id: v1(), title: 'HTML', isDone: true},
            {id: v1(), title: 'JS', isDone: false},
            {id: v1(), title: 'React', isDone: true},
        ]
    })

    const addNewTask = (todolistID: string, title: string) => {
        const newTask = {id: v1(), title, isDone: false}
        setTask({[todolistID]: [newTask, ...task[todolistID]]})
    }
    const changeStatusTask = (todolistID: string, taskID: string, value: boolean) => {
        setTask({[todolistID]: task[todolistID].map(m => m.id === taskID ? {...m, isDone: value} : m)})
    }
    const changeFilterTodo = (todolistID: string, filter: FilterType) => {
        setTodolist(todolist.map(m => m.id === todolistID ? {...m, filter} : m))
    }

    return (
        <div className="App">
            {
                todolist.map(m => <Todolist key={m.id}
                                            task={task}
                                            todolistID={m.id}
                                            title={m.title}
                                            addNewTask={addNewTask}
                                            changeStatusTask={changeStatusTask}
                                            filter={m.filter}
                                            changeFilterTodo={changeFilterTodo}
                />)
            }
        </div>
    );
}