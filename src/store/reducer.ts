import {start} from "repl";
import {isDisabled} from "@testing-library/user-event/dist/utils";

export type Counter = {
    value: number
    max: number
    start: number
    isDisable: boolean
}

export type Actions = Increment | Decrement | SetSettings | Reset;

const counter: Counter = {
    value: 0,
    max: 5,
    start: 0,
    isDisable: false
}

export function reducer(state: Counter, action: Actions): Counter {
    switch (action.type) {
        case "increment":
            return {...state, value: state.value + 1}
        case "decrement":
            return {...state, value: state.value - 1}
        case "set":
            return {...state, start: action.payload.start, max: action.payload.max}
        case "disable":
            return {...state, isDisable: !state.isDisable}
        default:
            return state
    }
}

type Increment = ReturnType<typeof increment>
type Decrement = ReturnType<typeof decrement>
type SetSettings = ReturnType<typeof setSettings>
type Reset = ReturnType<typeof reset>

export const increment = () => ({type: 'increment'} as const)
export const decrement = () => ({type: 'decrement'} as const)
export const setSettings = (start: number, max: number) => {
    return {type: "set", payload: {start, max}} as const
}
export const reset = () => ({type: "disable"} as const)