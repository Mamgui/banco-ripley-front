import Register from "./Register";
import {fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

const mockRegister = jest.fn()
const mockRestart = jest.fn()

const defaultProps = {isRegisterLoading: false, isRegistered: false, register: mockRegister, restart: mockRestart}

const component = (
    <BrowserRouter>
        <Register {...defaultProps}/>
    </BrowserRouter>
)

describe('register tests', () => {
    test("render go back anchor when register is not loading", () => {
        render(component)

        const goBackAnchor = screen.getByText("Volver atrás")

        expect(goBackAnchor).toBeDefined()
    })

    test("call restart when go back anchor is clicked", () => {
        render(component)

        const goBackAnchor = screen.getByText("Volver atrás")
        fireEvent.click(goBackAnchor)

        expect(goBackAnchor).toBeDefined()
        expect(mockRestart).toHaveBeenCalledTimes(1)
    })

    test("render username and password labels when register is not loading", () => {
        render(component)

        const usernameLabel = screen.getByText("Nombre de usuario")
        const passwordLabel = screen.getByText("Contraseña")

        expect(usernameLabel).toBeDefined()
        expect(passwordLabel).toBeDefined()
    })

    test("render submit button when register is not loading", () => {
        render(component)

        const submitButton = screen.getByText("Aceptar")

        expect(submitButton).toBeDefined()
    })

    test("call register with username and password when submit button is clicked", () => {
        render(component)

        const usernameInput = screen.getByLabelText("Nombre de usuario")
        const passwordInput = screen.getByLabelText("Contraseña")
        const submitButton = screen.getByText("Aceptar")
        fireEvent.change(usernameInput, {target: {value: 'Ariel'}})
        fireEvent.change(passwordInput, {target: {value: 'SuperSecret'}})
        fireEvent.click(submitButton)

        expect(mockRegister).toHaveBeenCalledTimes(1)
        expect(mockRegister).toHaveBeenNthCalledWith(1, "Ariel", "SuperSecret")
    })

    test("render loading message when register is loading and is not registered", () => {
        const component = (
            <BrowserRouter>
                <Register {...defaultProps} isRegisterLoading={true}/>
            </BrowserRouter>
        )
        render(component)

        const loading = screen.getByText("Cargando...")
        const goBackAnchor = screen.queryByText("Volver atrás")
        const usernameLabel = screen.queryByText("Nombre de usuario")
        const passwordLabel = screen.queryByText("Contraseña")
        const submitButton = screen.queryByText("Aceptar")
        const registered = screen.queryByText('Felicitaciones! has creado tu cuenta')

        expect(loading).toBeDefined()
        expect(goBackAnchor).toBeNull()
        expect(usernameLabel).toBeNull()
        expect(passwordLabel).toBeNull()
        expect(submitButton).toBeNull()
        expect(registered).toBeNull()
    })

    test("render registered message when is registered and register is not loading", () => {
        const component = (
            <BrowserRouter>
                <Register {...defaultProps} isRegistered={true}/>
            </BrowserRouter>
        )
        render(component)

        const registered = screen.getByText('Felicitaciones! has creado tu cuenta')
        const loading = screen.queryByText("Cargando...")
        const usernameLabel = screen.queryByText("Nombre de usuario")
        const passwordLabel = screen.queryByText("Contraseña")
        const submitButton = screen.queryByText("Aceptar")

        expect(registered).toBeDefined()
        expect(loading).toBeNull()
        expect(usernameLabel).toBeNull()
        expect(passwordLabel).toBeNull()
        expect(submitButton).toBeNull()
    })
})
