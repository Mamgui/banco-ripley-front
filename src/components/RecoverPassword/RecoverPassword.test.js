import {fireEvent, render, screen} from "@testing-library/react";
import RecoverPassword from "./RecoverPassword";
import {BrowserRouter} from "react-router-dom";

const mockRecoverPassword = jest.fn()
const mockUpdatePassword = jest.fn()

const defaultProps = {token: null, recoverPassword: mockRecoverPassword, updatePassword: mockUpdatePassword}

const component = (
    <BrowserRouter>
        <RecoverPassword {...defaultProps}/>
    </BrowserRouter>
)
const componentWithToken = (
    <BrowserRouter>
        <RecoverPassword {...defaultProps} token="1234"/>
    </BrowserRouter>
)

describe('recover password tests', () => {
    test("render go back anchor", () => {
        render(component)

        const goBackAnchor = screen.getByText("Volver atrás")

        expect(goBackAnchor).toBeDefined()
    })

    test("render username label for recover password when token is null", () => {
        render(component)

        const usernameLabel = screen.getByText("Nombre de usuario")

        expect(usernameLabel).toBeDefined()
    })

    test("render recover password button when token is null", () => {
        render(component)

        const recoverPasswordButton = screen.getByText("Aceptar")

        expect(recoverPasswordButton).toBeDefined()
    })

    test("call recover password with username when recover password button is clicked", () => {
        render(component)

        const usernameInput = screen.getByLabelText("Nombre de usuario")
        const recoverPasswordButton = screen.getByText("Aceptar")
        fireEvent.change(usernameInput, {target: {value: 'Ariel'}})
        fireEvent.click(recoverPasswordButton)

        expect(mockRecoverPassword).toHaveBeenCalledTimes(1)
        expect(mockRecoverPassword).toHaveBeenNthCalledWith(1, "Ariel")
    })

    test("render new password label for recover password when token is defined", () => {
        render(componentWithToken)

        const newPasswordLabel = screen.getByText("Nueva contraseña")

        expect(newPasswordLabel).toBeDefined()
    })

    test("render update password button when token is defined", () => {
        render(componentWithToken)

        const updatePasswordButton = screen.getByText("Cambiar contraseña")

        expect(updatePasswordButton).toBeDefined()
    })

    test("call update password with token and newPassword when recover password button is clicked", () => {
        render(componentWithToken)

        const newPasswordInput = screen.getByLabelText("Nueva contraseña")
        const updatePasswordButton = screen.getByText("Cambiar contraseña")
        fireEvent.change(newPasswordInput, {target: {value: 'NewSuperSecret'}})
        fireEvent.click(updatePasswordButton)

        expect(mockUpdatePassword).toHaveBeenCalledTimes(1)
        expect(mockUpdatePassword).toHaveBeenNthCalledWith(1, "1234", "NewSuperSecret")
    })
})
