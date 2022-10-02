import {render, screen} from '@testing-library/react';
import {Link} from './Link';
import {BrowserRouter} from "react-router-dom";

describe('Link', () => {
    test('render', () => {
        render(
            <BrowserRouter>
                <Link to="/baobab">baobab</Link>
            </BrowserRouter>
        );
        expect(screen.getByText('baobab')).toBeInTheDocument();
    });
});
