import {FilterType, TodolistType} from "../App";
import {v1} from "uuid";

type ActionType = ChangeFilterType
    | AddTodoType
    | DeleteTodoType

export const todolistReducer = (state: TodolistType[], action: ActionType): TodolistType[] => {
    switch (action.type) {
        case "CHANGE-FILTER": {
            return state.map(m => m.id === action.todoID ? {...m, filter: action.todoFilter} : m)
        }
        case "ADD-TODOLIST": {
            let newTodolist: TodolistType = {id: action.newID, title: action.todoTitle, filter: 'all'}
            return [newTodolist, ...state]
        }
        case "DELETE-TODOLIST": {
            return state.filter(f => f.id !== action.todoID)
        }
        default:
            return state
    }
}

type ChangeFilterType = ReturnType<typeof changeFilterTodoAC>
export const changeFilterTodoAC = (todolistID: string, filter: FilterType) => {
    return {
        type: 'CHANGE-FILTER', todoID: todolistID, todoFilter: filter,
    } as const
}

export type AddTodoType = ReturnType<typeof addNewTodoAC>
export const addNewTodoAC = (title: string) => {
    const newTodoID = v1()
    return {
        type: 'ADD-TODOLIST', todoTitle: title, newID: newTodoID,
    } as const
}

type DeleteTodoType = ReturnType<typeof deleteTodo>
export const deleteTodo = (todolistID: string) => {
    return {
        type: 'DELETE-TODOLIST', todoID: todolistID
    } as const
}