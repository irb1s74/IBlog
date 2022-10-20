import {counterActions, counterReducer} from "./counterSlice";
import {CounterSchema} from "../types/counterSchema";

describe('counterSlice.test', () => {
    test("decrement", () => {
        const state: CounterSchema = {
            value: 2
        }
        expect(counterReducer(state, counterActions.decrement())).toEqual({value: 1})
    })

    test("increment", () => {
        const state: CounterSchema = {
            value: 2
        }
        expect(counterReducer(state, counterActions.increment())).toEqual({value: 3})
    })

    test("with initial state", () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({value: 1})
    })
})
