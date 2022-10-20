import {getByTestId, render,screen} from "@testing-library/react";
import Counter from "./Counter";
import {componentRender} from "shared/lib/test/componentRender/componentRender";
import {userEvent} from "@storybook/testing-library";

describe('Counter.test', () => {
    test("", () => {
        componentRender(<Counter/>, {
            initialState: {
                counter: {
                    value: 10
                }
            }
        });
        const btnIncrement = screen.getByTestId("counter-increment-btn")
        const btnDecrement = screen.getByTestId("counter-decrement-btn")
        expect(screen.getByTestId("counter-value")).toHaveTextContent("10")
        userEvent.click(btnIncrement);
        expect(screen.getByTestId("counter-value")).toHaveTextContent("11")
        userEvent.click(btnDecrement);
        userEvent.click(btnDecrement);
        expect(screen.getByTestId("counter-value")).toHaveTextContent("9")
    })
})
