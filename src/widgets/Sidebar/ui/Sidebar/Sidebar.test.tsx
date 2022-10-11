import {screen} from "@testing-library/react";
import {Sidebar} from "./Sidebar";
import {fireEvent} from "@storybook/testing-library";
import {componentRender} from "shared/lib/test/componentRender/componentRender";

describe('Sidebar', () => {
    test('render', () => {
        componentRender(<Sidebar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    })

    test('toggle', () => {
        componentRender(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-btn-toggle');
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(sidebar).toHaveClass('collapsed');
    })
})
