import React, {memo, useCallback} from 'react';
import {ChangeTitle} from './universalComponents/changeTitle';
import {UniversalInput} from './universalComponents/universalInput';
import {ButtonsForFiltering} from './universalComponents/buttonsForFiltering';
import {FilterType, TaskType} from '../App';
import {Task} from './task';
import {ButtonForDelete} from './universalComponents/buttonForDelete';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../state/store';
import {addTaskAC} from '../reducers/task-reducer';
import {changeFilterTodoAC, changeTitleAC, deleteTodoAC} from '../reducers/todolist-reducer';

type TodolistPropsType = {
    todolistID: string
    title: string
    filter: FilterType
}

export const Todolist = memo(({todolistID, title, filter}: TodolistPropsType) => {

        let task = useSelector<AppRootStateType, TaskType[]>(state => state.tasks[todolistID])
        const dispatch = useDispatch()

        const addTask = useCallback((title: string) => {
            dispatch(addTaskAC(todolistID, title))
        }, [dispatch, todolistID])
        const deleteTodo = useCallback(() => {
            dispatch(deleteTodoAC(todolistID))
        }, [dispatch, todolistID])
        const changeFilter = useCallback((filter: FilterType) => {
            dispatch(changeFilterTodoAC(todolistID, filter))
        }, [dispatch, todolistID])
        const changeTitleTodo = useCallback((value: string) => {
            dispatch(changeTitleAC(todolistID, value))
        }, [dispatch, todolistID])

        let taskFiltered = task
        if (filter === 'active') {
            taskFiltered = taskFiltered.filter(f => !f.isDone)
        }
        if (filter === 'completed') {
            taskFiltered = taskFiltered.filter(f => f.isDone)
        }

        return (
            <div>
                <div style={{paddingBottom: '10px'}}>
                    <h3>
                        <ChangeTitle callback={changeTitleTodo} title={title}/>
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
                                                    title={m.title}
                                                    isDone={m.isDone}
                                                    todolistID={todolistID}

                        />)
                    }
                </ul>
                <div>
                    <ButtonsForFiltering callback={changeFilter} filter={filter}/>
                </div>
            </div>
        );
    }
)
