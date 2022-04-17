import {TaskStateType, TaskType} from "../App";
import {v1} from "uuid";
import {AddTodoType} from "./todolist-reducer";

type ActionType = AddType
    | ChangeStatusType
    | AddTodoType
    | DeleteTaskType

export const taskReducer = (state: TaskStateType, action: ActionType): TaskStateType => {
    switch (action.type) {
        case "ADD-TASK": {
            const newTask: TaskType = {id: v1(), title: action.payload.title, isDone: false}
            return {...state, [action.payload.todolistID]: [newTask, ...state[action.payload.todolistID]]}
        }
        case "DELETE-TASK": {
            return {
                ...state,
                [action.payload.todolistID]: state[action.payload.todolistID]
                    .filter(f => f.id !== action.payload.taskID)
            }
        }
        case "CHANGE-STATUS": {
            return {
                ...state,
                [action.payload.todolistID]: state[action.payload.todolistID]
                    .map(m => m.id === action.payload.taskID ? {
                        ...m, isDone: action.payload.value
                    } : m)
            }
        }
        case "ADD-TODOLIST": {
            return {...state, [action.newID]: []}
        }
        default:
            return state
    }
}

type AddType = ReturnType<typeof addTaskAC>
export const addTaskAC = (todolistID: string, title: string) => {
    return {
        type: 'ADD-TASK',
        payload: {todolistID, title}
    } as const
}

type DeleteTaskType = ReturnType<typeof deleteTaskAC>
export const deleteTaskAC = (todolistID: string, taskID: string) => {
    return {
        type: 'DELETE-TASK',
        payload: {todolistID, taskID}
    } as const
}

type ChangeStatusType = ReturnType<typeof changeStatusTaskAC>
export const changeStatusTaskAC = (todolistID: string, taskID: string, value: boolean) => {
    return {
        type: 'CHANGE-STATUS',
        payload: {todolistID, taskID, value}
    } as const
}