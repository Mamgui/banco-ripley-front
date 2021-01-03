import Login from "./Login";
import {fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

const mockLogin = jest.fn()

const defaultProps = {isLoginLoading: false, login: mockLogin}

const component = (
    <BrowserRouter>
        <Login {...defaultProps}/>
    </BrowserRouter>
)

describe('login tests', () => {
    test("render username and password labels when login is not loading", () => {
        render(component)

        const usernameLabel = screen.getByText("Nombre de usuario")
        const passwordLabel = screen.getByText("Contraseña")

        expect(usernameLabel).toBeDefined()
        expect(passwordLabel).toBeDefined()
    })

    test("render submit button when login is not loading", () => {
        render(component)

        const submitButton = screen.getByText("Iniciar sesión")

        expect(submitButton).toBeDefined()
    })

    test("call login with username and password when submit button is clicked", () => {
        render(component)

        const usernameInput = screen.getByLabelText("Nombre de usuario")
        const passwordInput = screen.getByLabelText("Contraseña")
        const submitButton = screen.getByText("Iniciar sesión")
        fireEvent.change(usernameInput, {target: {value: 'Ariel'}})
        fireEvent.change(passwordInput, {target: {value: 'SuperSecret'}})
        fireEvent.click(submitButton)

        expect(mockLogin).toHaveBeenCalledTimes(1)
        expect(mockLogin).toHaveBeenNthCalledWith(1, "Ariel", "SuperSecret")
    })

    test("render loading message when login is loading", () => {
        const component = (
            <BrowserRouter>
                <Login {...defaultProps} isLoginLoading={true}/>
            </BrowserRouter>
        )
        render(component)

        const loading = screen.getByText("Cargando...")
        const usernameLabel = screen.queryByText("Nombre de usuario")
        const passwordLabel = screen.queryByText("Contraseña")
        const submitButton = screen.queryByText("Iniciar sesión")

        expect(loading).toBeDefined()
        expect(usernameLabel).toBeNull()
        expect(passwordLabel).toBeNull()
        expect(submitButton).toBeNull()
    })

    test("render recover password and register anchors when login is not loading", () => {
        render(component)

        const recoverPasswordAnchor = screen.getByText("Recuperar contraseña")
        const registerAnchor = screen.getByText("Crear cuenta")

        expect(recoverPasswordAnchor).toBeDefined()
        expect(registerAnchor).toBeDefined()
    })
})
