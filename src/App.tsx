import React from 'react';
import './App.css';
import {Todolist} from "./components/todolist";
import {UniversalInput} from "./components/universalComponents/universalInput";
import {addNewTodoAC} from "./reducers/todolist-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";

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

    let todo = useSelector<AppRootStateType, TodolistType[]>(state => state.todolist)
    const dispatch = useDispatch()

    const addNewTodo = (title: string) => {
        dispatch(addNewTodoAC(title))
    }

    return (
        <div className="App">
            <UniversalInput callback={addNewTodo}/>
            {
                todo.map(m => <Todolist key={m.id}
                                        todolist={m}
                />)
            }
        </div>
    );
}