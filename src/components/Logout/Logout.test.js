import Logout from "./Logout";
import {fireEvent, render, screen} from "@testing-library/react";

const mockLogout = jest.fn()

const defaultProps = {logout: mockLogout}

const component = <Logout {...defaultProps}/>

describe('logout tests', () => {
    test("render logout button", () => {
        render(component)

        const logoutButton = screen.getByText("Cerrar sesión")

        expect(logoutButton).toBeDefined()
    })

    test("call logout when logout button is clicked", () => {
        render(component)

        const logoutButton = screen.getByText("Cerrar sesión")
        fireEvent.click(logoutButton)

        expect(mockLogout).toHaveBeenCalledTimes(1)
        expect(mockLogout).toHaveBeenNthCalledWith(1)
    })
})
