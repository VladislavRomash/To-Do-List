import React, {useReducer} from 'react';
import './App.css';
import {Todolist} from "./components/todolist";
import {v1} from "uuid";
import {UniversalInput} from "./components/universalComponents/universalInput";
import {addTaskAC, changeStatusTaskAC, deleteTaskAC, taskReducer} from "./reducers/task-reducer";
import {addNewTodoAC, changeFilterTodoAC, deleteTodo, todolistReducer} from "./reducers/todolist-reducer";

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
    [todolistID: string]: TaskType[]
}

export const App = () => {

    const todolistID = v1()

    const [todolist, dispatchTodolist] = useReducer(todolistReducer, [
        {id: todolistID, title: 'What to learn', filter: 'all'},
    ])
    const [task, dispatchTask] = useReducer(taskReducer, {
        [todolistID]: [
            {id: v1(), title: 'HTML', isDone: true},
            {id: v1(), title: 'JS', isDone: false},
            {id: v1(), title: 'React', isDone: true},
        ]
    })

    const addNewTask = (todolistID: string, title: string) => {
        dispatchTask(addTaskAC(todolistID, title))
    }
    const deleteTask = (todolistID: string, taskID: string) => {
        dispatchTask(deleteTaskAC(todolistID, taskID))
    }
    const changeStatusTask = (todolistID: string, taskID: string, value: boolean) => {
        dispatchTask(changeStatusTaskAC(todolistID, taskID, value))
    }
    const changeFilterTodo = (todolistID: string, filter: FilterType) => {
        dispatchTodolist(changeFilterTodoAC(todolistID, filter))
    }
    const addNewTodo = (title: string) => {
        const dispatch = addNewTodoAC(title)
        dispatchTodolist(dispatch)
        dispatchTask(dispatch)
    }
    const deleteTodolist = (todolistID: string) => {
        dispatchTodolist(deleteTodo(todolistID))
    }

    return (
        <div className="App">
            <UniversalInput callback={addNewTodo}/>
            {
                todolist.map(m => <Todolist key={m.id}
                                            todolist={m}
                                            task={task}
                                            addNewTask={addNewTask}
                                            changeStatusTask={changeStatusTask}
                                            changeFilterTodo={changeFilterTodo}
                                            deleteTask={deleteTask}
                                            deleteTodolist={deleteTodolist}
                />)
            }
        </div>
    );
}