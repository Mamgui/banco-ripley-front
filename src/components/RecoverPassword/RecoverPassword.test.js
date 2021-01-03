import {fireEvent, render, screen} from "@testing-library/react";
import RecoverPassword from "./RecoverPassword";
import {BrowserRouter} from "react-router-dom";

const mockRecoverPassword = jest.fn()
const mockUpdatePassword = jest.fn()
const mockRestart = jest.fn()

const defaultProps = {
    isRecoverPasswordLoading: false,
    token: null,
    isUpdatePasswordLoading: false,
    isPasswordUpdated: false,
    recoverPassword: mockRecoverPassword,
    updatePassword: mockUpdatePassword,
    restart: mockRestart,
}

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
    test("render go back anchor when recover password and update password are not loading", () => {
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

    test("render username label for recover password when token is null, recover password and update password are not loading", () => {
        render(component)

        const usernameLabel = screen.getByText("Nombre de usuario")

        expect(usernameLabel).toBeDefined()
    })

    test("render recover password button when token is null, recover password and update password are not loading", () => {
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

    test("render new password label for recover password when token is defined, recover password and update password are not loading", () => {
        render(componentWithToken)

        const newPasswordLabel = screen.getByText("Nueva contraseña")

        expect(newPasswordLabel).toBeDefined()
    })

    test("render update password button when token is defined, recover password and update password are not loading", () => {
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

    test("render loading message when recover password is loading and update password is not loading", () => {
        const component = (
            <BrowserRouter>
                <RecoverPassword {...defaultProps} isRecoverPasswordLoading={true}/>
            </BrowserRouter>
        )
        render(component)

        const loading = screen.getByText("Cargando...")
        const goBackAnchor = screen.queryByText("Volver atrás")
        const usernameLabel = screen.queryByText("Nombre de usuario")
        const recoverPasswordButton = screen.queryByText("Aceptar")
        const newPasswordLabel = screen.queryByText("Nueva contraseña")
        const updatePasswordButton = screen.queryByText("Cambiar contraseña")

        expect(loading).toBeDefined()
        expect(goBackAnchor).toBeNull()
        expect(usernameLabel).toBeNull()
        expect(recoverPasswordButton).toBeNull()
        expect(newPasswordLabel).toBeNull()
        expect(updatePasswordButton).toBeNull()
    })

    test("render loading message when update password is loading and recover password is not loading", () => {
        const component = (
            <BrowserRouter>
                <RecoverPassword {...defaultProps} isUpdatePasswordLoading={true}/>
            </BrowserRouter>
        )
        render(component)

        const loading = screen.getByText("Cargando...")
        const goBackAnchor = screen.queryByText("Volver atrás")
        const usernameLabel = screen.queryByText("Nombre de usuario")
        const recoverPasswordButton = screen.queryByText("Aceptar")
        const newPasswordLabel = screen.queryByText("Nueva contraseña")
        const updatePasswordButton = screen.queryByText("Cambiar contraseña")

        expect(loading).toBeDefined()
        expect(goBackAnchor).toBeNull()
        expect(usernameLabel).toBeNull()
        expect(recoverPasswordButton).toBeNull()
        expect(newPasswordLabel).toBeNull()
        expect(updatePasswordButton).toBeNull()
    })

    test("render password updated message when password is updated, token is null, recover password and update password are not loading", () => {
        const component = (
            <BrowserRouter>
                <RecoverPassword {...defaultProps} isPasswordUpdated={true}/>
            </BrowserRouter>
        )
        render(component)

        const passwordUpdated = screen.getByText('Felicitaciones! has actualizado tu contraseña')
        const loading = screen.queryByText("Cargando...")
        const usernameLabel = screen.queryByText("Nombre de usuario")
        const recoverPasswordButton = screen.queryByText("Aceptar")
        const newPasswordLabel = screen.queryByText("Nueva contraseña")
        const updatePasswordButton = screen.queryByText("Cambiar contraseña")

        expect(passwordUpdated).toBeDefined()
        expect(loading).toBeNull()
        expect(usernameLabel).toBeNull()
        expect(recoverPasswordButton).toBeNull()
        expect(newPasswordLabel).toBeNull()
        expect(updatePasswordButton).toBeNull()
    })
})
