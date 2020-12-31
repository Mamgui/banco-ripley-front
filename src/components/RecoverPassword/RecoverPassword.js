import React, {useState} from "react";
import {Link} from "react-router-dom";
import * as PropTypes from "prop-types";

const userNameLabel = 'Nombre de usuario'
const newPasswordLabel = 'Nueva contraseña'
const acceptButton = 'Aceptar'
const updatePasswordButton = 'Cambiar contraseña'
const goBackAnchor = 'Volver atrás'
const passwordUpdatedMessage = 'Felicitaciones! has actualizado tu contraseña'

function RecoverPassword({token, isPasswordUpdated, recoverPassword, updatePassword, restart}) {
    const [username, setUsername] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const handleOnChange = (event, setter) => {
        setter(
            event.target.value
        )
    }

    const handleRecoverSubmit = (event) => {
        event.preventDefault()
        recoverPassword(username)
    }

    const handleUpdateSubmit = (event) => {
        event.preventDefault()
        updatePassword(token, newPassword)
    }

    const renderRecoverPassword = (
        <form>
            <label>{userNameLabel}
                <input type="text" name="username" value={username}
                       onChange={(event) => handleOnChange(event, setUsername)}/>
            </label>
            <input type="submit" value={acceptButton} onClick={handleRecoverSubmit}/>
        </form>
    )

    const renderUpdatePassword = (
        <form>
            <label>{newPasswordLabel}
                <input type="password" name="newPassword" value={newPassword}
                       onChange={(event) => handleOnChange(event, setNewPassword)}/>
            </label>
            <input type="submit" value={updatePasswordButton} onClick={handleUpdateSubmit}/>
        </form>
    )

    const renderPasswordUpdated = <div>{passwordUpdatedMessage}</div>

    return (
        <div>
            <Link to="/" onClick={restart}>{goBackAnchor}</Link>
            {token ? renderUpdatePassword : isPasswordUpdated ? renderPasswordUpdated : renderRecoverPassword}
        </div>
    );
}

RecoverPassword.propTypes = {
    token: PropTypes.string,
    recoverPassword: PropTypes.func.isRequired,
    updatePassword: PropTypes.func.isRequired
};

export default RecoverPassword;