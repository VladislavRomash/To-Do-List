import {combineReducers, createStore} from "redux";
import {taskReducer} from "../reducers/task-reducer";
import {todolistReducer} from "../reducers/todolist-reducer";

const rootReducer = combineReducers({
    tasks: taskReducer,
    todolist: todolistReducer
})

// непосредственно создаём store
export const store = createStore(rootReducer);
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
