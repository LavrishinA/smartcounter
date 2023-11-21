import {decrement, increment, reducer, reset, disable, setStart, setMax, CounterType,} from "./reducer";

let state: CounterType;
beforeEach(() => {
    state = {
        counterValue: 1,
        max: 5,
        start: 1,
        isDisable: false
    }
})

test("Value should be increased", () => {
    const stateAfterReduce = reducer(state, increment())

    expect(stateAfterReduce.counterValue).toBe(2)
    expect(stateAfterReduce.max).toBe(5)
    expect(stateAfterReduce.start).toBe(1)
    expect(stateAfterReduce.isDisable).toBeFalsy()
})

test("Value should be decreased", () => {
    const stateAfterReduce = reducer(state, decrement())

    expect(stateAfterReduce.counterValue).toBe(0)
    expect(stateAfterReduce.max).toBe(5)
    expect(stateAfterReduce.start).toBe(1)
    expect(stateAfterReduce.isDisable).toBeFalsy()
})

test("Start value should be changed", () => {
    const stateAfterReduce = reducer(state, setStart(5))
    expect(state.start).toBe(1)
    expect(stateAfterReduce.start).toBe(5)
})
test("Max value should be changed", () => {
    const stateAfterReduce = reducer(state, setMax(10))
    expect(state.max).toBe(5)
    expect(stateAfterReduce.max).toBe(5)
})


test("Counter value should be rested", () => {
    const stateAfterReduce = reducer(state, increment())
    const stateAfterReset = reducer(stateAfterReduce, reset())

    const isRested = stateAfterReset.counterValue === state.counterValue
    expect(isRested).toBeTruthy()
})

test("isDisable property should be changed to opposite", () => {
    const stateAfterReduce = reducer(state, disable(true))

    const opposite = stateAfterReduce.isDisable !== state.isDisable
    expect(opposite).toBeTruthy()
})