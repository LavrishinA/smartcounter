import {combineReducers, createStore} from "redux";
import {reducer} from "./reducer";

export type Store = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    counter: reducer
})

export const store = createStore(rootReducer)