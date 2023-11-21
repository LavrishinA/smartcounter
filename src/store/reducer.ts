export type CounterType = {
    counterValue: number
    max: number
    start: number
    isDisable: boolean
}

export type Actions = Increment | Decrement | SetStart | SetMax | Disable | Reset;

const counter = {
    counterValue: 0,
    max: 5,
    start: 0,
    isDisable: false
}

export function reducer(state: CounterType = counter, action: Actions): CounterType {
    switch (action.type) {
        case "increment":
            return {...state, counterValue: state.counterValue + 1}
        case "decrement":
            return {...state, counterValue: state.counterValue - 1}
        case "set-start":
            return {...state, start: action.start}
        case "set-max":
            return {...state, max: action.max, }
        case "reset":
            return {...state, counterValue: state.start}
        case "disable":
            return {...state, isDisable: action.isDisable}
        default:
            return state
    }
}

type Increment = ReturnType<typeof increment>
type Decrement = ReturnType<typeof decrement>
type SetStart = ReturnType<typeof setStart>
type SetMax = ReturnType<typeof setMax>
type Disable = ReturnType<typeof disable>
type Reset = ReturnType<typeof reset>

export const increment = () => ({type: 'increment'} as const)
export const decrement = () => ({type: 'decrement'} as const)
export const setStart = (start: number) => {
    return {type: "set-start", start} as const
}
export const setMax = (max: number) => {
    return {type: "set-max", max} as const
}
export const disable = (isDisable: boolean) => ({type: "disable", isDisable} as const)
export const reset = () => ({type: "reset"} as const)