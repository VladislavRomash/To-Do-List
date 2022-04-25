import React from 'react';
import './App.css';
import {Todolist} from "./components/todolist";
import {UniversalInput} from "./components/universalComponents/universalInput";
import {addNewTodoAC} from "./reducers/todolist-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import {Search} from "./MUI/MUI_AppBar";
import {SearchIconWrapper, StyledInputBase} from "./MUI/MUI_AppBar";
import SearchIcon from "@mui/icons-material/Search";
import {Container, Grid, Paper} from "@mui/material";

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
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{mr: 2}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                        >
                            Your To-Do
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon/>
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{'aria-label': 'search'}}
                            />
                        </Search>
                    </Toolbar>
                </AppBar>
            </Box>
            <Container fixed>
                <Grid container style={{padding: '20px'}}>
                    <UniversalInput callback={addNewTodo}/>
                </Grid>
                <Grid container spacing={3}>
                    {
                        todo.map(m => {
                                return <Grid item key={m.id}>
                                    <Paper style={{padding: "10px"}}>
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