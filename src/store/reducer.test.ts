import {Counter, decrement, increment, reducer, reset, setSettings} from "./reducer";

let state: Counter;
beforeEach(() => {
    state = {
        value: 1,
        max: 5,
        start: 1,
        isDisable: false
    }
})

test("Value should be increased", () => {
    const stateAfterReduce = reducer(state, increment())

    expect(stateAfterReduce.value).toBe(2)
    expect(stateAfterReduce.max).toBe(5)
    expect(stateAfterReduce.start).toBe(1)
    expect(stateAfterReduce.isDisable).toBeFalsy()
})

test("Value should be decreased", () => {
    const stateAfterReduce = reducer(state, decrement())

    expect(stateAfterReduce.value).toBe(0)
    expect(stateAfterReduce.max).toBe(5)
    expect(stateAfterReduce.start).toBe(1)
    expect(stateAfterReduce.isDisable).toBeFalsy()
})

test("Settings should be changed", () => {
    const stateAfterReduce = reducer(state, setSettings(5, 10))
    expect(stateAfterReduce.start).toBe(5)
    expect(stateAfterReduce.max).toBe(10)
})

test("isDisable property should be changed to opposite", () => {
    const stateAfterReduce = reducer(state, reset())

    const opposite = stateAfterReduce.isDisable !== state.isDisable
    expect(opposite).toBeTruthy()
})