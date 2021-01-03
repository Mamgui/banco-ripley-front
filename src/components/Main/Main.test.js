import Main from "./Main";
import {render, screen} from "@testing-library/react";

jest.mock('../../containers/LoginContainer/LoginContainer', () => () => (
    <div>LoginContainer</div>
))
jest.mock('../../containers/LogoutContainer/LogoutContainer', () => () => (
    <div>LogoutContainer</div>
))

const defaultProps = {isLoggedIn: false}

const component = <Main {...defaultProps}/>

describe('main tests', () => {
    test("render login when user is not logged in", () => {
        render(component)

        const login = screen.getByText("LoginContainer")

        expect(login).toBeDefined()
    })

    test("render logout when user is logged in", () => {
        const component = <Main {...defaultProps} isLoggedIn={true}/>
        render(component)

        const logout = screen.getByText("LogoutContainer")

        expect(logout).toBeDefined()
    })
})
