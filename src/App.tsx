import React from 'react';
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

    console.log('App')

    let todo = useSelector<AppRootStateType, TodolistType[]>(state => state.todolist)
    const dispatch = useDispatch()

    const addNewTodo = (title: string) => {
        dispatch(addNewTodoAC(title))
    }

    return (
        <div className="App">
            <AppBarMUI/>
            <Container fixed>
                <Grid container style={{padding: '20px'}}>
                    <UniversalInput callback={addNewTodo}/>
                </Grid>
                <Grid container spacing={3}>
                    {
                        todo.map(m => {
                                return <Grid item key={m.id}>
                                    <Paper style={{padding: '10px'}}>
                                        <Todolist key={m.id}
                                                  todolistID={m.id}
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