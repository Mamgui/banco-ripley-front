import Main from "./Main";
import {render, screen} from "@testing-library/react";

jest.mock('../../containers/LoginContainer/LoginContainer', () => () => (
    <div>LoginContainer</div>
))
jest.mock('../../containers/LogoutContainer/LogoutContainer', () => () => (
    <div>LogoutContainer</div>
))

const defaultProps = {isLoginLoading: false, isLoggedIn: false}

const component = <Main {...defaultProps}/>

describe('main tests', () => {
    test("render welcome title", () => {
        render(component)

        const welcomeTitle = screen.getByText("Hola!")

        expect(welcomeTitle).toBeDefined()
    })

    test("render login when user is not logged in and is not login loading", () => {
        render(component)

        const login = screen.getByText("LoginContainer")

        expect(login).toBeDefined()
    })

    test("render logout when user is logged in and is not login loading", () => {
        const component = <Main {...defaultProps} isLoggedIn={true}/>
        render(component)

        const logout = screen.getByText("LogoutContainer")

        expect(logout).toBeDefined()
    })

    test("render loading message when is login loading", () => {
        const component = <Main {...defaultProps} isLoginLoading={true}/>
        render(component)

        const loading = screen.getByText("Cargando...")
        const login = screen.queryByText("LoginContainer")
        const logout = screen.queryByText("LogoutContainer")

        expect(loading).toBeDefined()
        expect(login).toBeNull()
        expect(logout).toBeNull()
    })
})
