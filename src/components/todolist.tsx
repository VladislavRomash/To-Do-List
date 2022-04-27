import React, {memo, useCallback} from 'react';
import {ChangeTitle} from './universalComponents/changeTitle';
import {UniversalInput} from './universalComponents/universalInput';
import {ButtonsForFiltering} from './universalComponents/buttonsForFiltering';
import {FilterType, TaskType, TodolistType} from '../App';
import {Task} from './task';
import {ButtonForDelete} from './universalComponents/buttonForDelete';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../state/store';
import {addTaskAC} from '../reducers/task-reducer';
import {changeFilterTodoAC, changeTitleAC, deleteTodoAC} from '../reducers/todolist-reducer';

type TodolistPropsType = {
    todolist: TodolistType
}

export const Todolist = memo(({todolist}: TodolistPropsType) => {

        let task = useSelector<AppRootStateType, TaskType[]>(state => state.tasks[todolist.id])
        const dispatch = useDispatch()

        const addTask = useCallback((title: string) => {
            dispatch(addTaskAC(todolist.id, title))
        }, [dispatch, todolist.id])
        const deleteTodo = useCallback(() => {
            dispatch(deleteTodoAC(todolist.id))
        }, [dispatch, todolist.id])
        const changeFilter = useCallback((filter: FilterType) => {
            dispatch(changeFilterTodoAC(todolist.id, filter))
        }, [dispatch, todolist.id])
        const changeTitleTodo = useCallback((value: string) => {
            dispatch(changeTitleAC(todolist.id, value))
        }, [dispatch, todolist.id])

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
                                                    task={m}
                                                    todolistID={todolist.id}

                        />)
                    }
                </ul>
                <div>
                    <ButtonsForFiltering callback={changeFilter} filter={todolist.filter}/>
                </div>
            </div>
        );
    }
)
