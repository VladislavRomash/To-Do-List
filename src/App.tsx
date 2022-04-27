import React, {useCallback} from 'react';
import './App.css';
import {Todolist} from './components/todolist';
import {UniversalInput} from './components/universalComponents/universalInput';
import {addNewTodoAC} from './reducers/todolist-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import {Container, Grid, Paper} from '@mui/material';
import {AppBarMUI} from './components/appBar_MUI';

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

    let todolist = useSelector<AppRootStateType, TodolistType[]>(state => state.todolist)
    let dispatch = useDispatch()

    const addNewTodo = useCallback((title: string) => {
        dispatch(addNewTodoAC(title))
    }, [dispatch])

    return (
        <div className="App">
            <AppBarMUI/>
            <Container fixed>
                <Grid container style={{padding: '20px'}}>
                    <UniversalInput callback={addNewTodo}/>
                </Grid>
                <Grid container spacing={3}>
                    {
                        todolist.map(m => {
                                return <Grid item key={m.id}>
                                    <Paper style={{padding: '10px'}}>
                                        <Todolist key={m.id}
                                                  todolist={m}
                                        />
                                    </Paper>
                                </Grid>
                            }
                        )
                    }
                </Grid>
            </Container>
        </div>
    );
}