import {render, screen} from '@testing-library/react';
import App from './App';

jest.mock('./containers/MainContainer/MainContainer', () => () => (
    <div>Main container</div>
))

describe('app tests', () => {
    test('renders main container when render', () => {
        render(<App/>);
        const mainContainer = screen.getByText("Main container");
        expect(mainContainer).toBeDefined();
    });
})

