import Login from "./Login";
import {fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

const mockLogin = jest.fn()

const defaultProps = {login: mockLogin}

const component = (
    <BrowserRouter>
        <Login {...defaultProps}/>
    </BrowserRouter>
)

describe('login tests', () => {
    test("render username and password labels", () => {
        render(component)

        const usernameLabel = screen.getByText("Nombre de usuario")
        const passwordLabel = screen.getByText("Contraseña")

        expect(usernameLabel).toBeDefined()
        expect(passwordLabel).toBeDefined()
    })

    test("render submit button", () => {
        render(component)

        const submitButton = screen.getByText("Aceptar")

        expect(submitButton).toBeDefined()
    })

    test("call login with username and password when submit button is clicked", () => {
        render(component)

        const usernameInput = screen.getByLabelText("Nombre de usuario")
        const passwordInput = screen.getByLabelText("Contraseña")
        const submitButton = screen.getByText("Aceptar")
        fireEvent.change(usernameInput, {target: {value: 'Ariel'}})
        fireEvent.change(passwordInput, {target: {value: 'SuperSecret'}})
        fireEvent.click(submitButton)

        expect(mockLogin).toHaveBeenCalledTimes(1)
        expect(mockLogin).toHaveBeenNthCalledWith(1, "Ariel", "SuperSecret")
    })
})
