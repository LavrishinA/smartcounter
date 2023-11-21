import {combineReducers, createStore} from "redux";
import {reducer} from "./reducer";

export type Counter = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    counter: reducer
})

export const store: Counter = createStore(rootReducer)