import React from 'react';
import {ChangeTitle} from "./universalComponents/changeTitle";
import {UniversalInput} from "./universalComponents/universalInput";
import {ButtonsForFiltering} from "./universalComponents/buttonsForFiltering";
import {FilterType, TaskType, TodolistType} from "../App";
import {Task} from "./task";
import {ButtonForDelete} from "./universalComponents/buttonForDelete";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {addTaskAC} from "../reducers/task-reducer";
import {changeFilterTodoAC, changeTitleAC, deleteTodoAC} from "../reducers/todolist-reducer";

type TodolistPropsType = {
    todolistID: string
}

export const Todolist = ({todolistID}: TodolistPropsType) => {

    const todolist = useSelector<AppRootStateType, TodolistType>(state => state.todolist
        .filter(f => f.id === todolistID)[0])
    let task = useSelector<AppRootStateType, TaskType[]>(state => state.tasks[todolist.id])

    const dispatch = useDispatch()

    const addTask = (title: string) => {
        dispatch(addTaskAC(todolist.id, title))
    }
    const deleteTodo = () => {
        dispatch(deleteTodoAC(todolist.id))
    }
    const changeFilter = (filter: FilterType) => {
        dispatch(changeFilterTodoAC(todolist.id, filter))
    }
    const changeTitleTodo = (value: string) => {
        dispatch(changeTitleAC(todolist.id, value))
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
            <div style={{paddingBottom: '10px'}}>
                <h3>
                    <ChangeTitle callback={changeTitleTodo} title={todolist.title}/>
                    <ButtonForDelete callback={deleteTodo}/>
                </h3>
            </div>
            <div>
                <UniversalInput callback={addTask}/>
            </div>
            <ul>
                {
                    taskFiltered.map(m => <Task key={m.id}
                                                taskID={m.id}
                                                todolistID={todolistID}

                    />)
                }
            </ul>
            <div>
                <ButtonsForFiltering callback={changeFilter} filter={todolist.filter}/>
            </div>
        </div>
    );
};