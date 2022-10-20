import {DeepPartial} from "@reduxjs/toolkit";
import {getCounter} from "./getCounter";
import {StateSchema} from "app/providers/StoreProvider";

describe('getCounter', () => {
    test("should return value", () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 0
            }
        }
        expect(getCounter(state as StateSchema)).toEqual({value: 0})
    })
})
