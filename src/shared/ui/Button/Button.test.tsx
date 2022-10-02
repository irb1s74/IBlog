import {render, screen} from '@testing-library/react';
import {Button} from "./Button";

describe('Button', () => {
    test('render', () => {
        render(<Button>baobab</Button>);
        expect(screen.getByText('baobab')).toBeInTheDocument();
    });
});
