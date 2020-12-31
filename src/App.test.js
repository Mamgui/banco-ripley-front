import {render, screen} from '@testing-library/react';
import App from './App';

jest.mock('./containers/MainContainer/MainContainer', () => () => (
    <div>Main container</div>
))
jest.mock('./containers/RecoverPasswordContainer/RecoverPasswordContainer', () => () => (
    <div>Recover Password container</div>
))

describe('app tests', () => {
    test('renders main container when route is root', () => {
        render(<App/>);

        const mainContainer = screen.getByText("Main container");

        expect(mainContainer).toBeDefined();
    });
})

