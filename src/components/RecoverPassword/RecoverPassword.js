import React, {useState} from "react";
import * as PropTypes from "prop-types";
import './RecoverPassword.scss'
import {Link} from "react-router-dom";

const userNameLabel = 'Nombre de usuario'
const newPasswordLabel = 'Nueva contraseña'
const acceptButton = 'Aceptar'
const updatePasswordButton = 'Cambiar contraseña'
const goBackAnchor = 'Volver atrás'
const passwordUpdatedMessage = 'Felicitaciones! has actualizado tu contraseña'
const loadingMessage = "Cargando..."

function RecoverPassword({
                             isRecoverPasswordLoading,
                             token,
                             isUpdatePasswordLoading,
                             isPasswordUpdated,
                             recoverPassword,
                             updatePassword,
                             restart
                         }) {
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

    const renderPasswordUpdated = <p>{passwordUpdatedMessage}</p>

    const renderUpdatePassword = (
        <form>
            <label>{newPasswordLabel}
                <input type="password" name="newPassword" value={newPassword}
                       onChange={(event) => handleOnChange(event, setNewPassword)}/>
            </label>
            <input type="submit" value={updatePasswordButton} onClick={handleUpdateSubmit}/>
        </form>
    )

    const renderContent = (
        <>
            <Link to="/" onClick={restart}>{goBackAnchor}</Link>
            {token ? renderUpdatePassword : isPasswordUpdated ? renderPasswordUpdated : renderRecoverPassword}
        </>
    )

    const renderLoading = <p>{loadingMessage}</p>

    return (
        <div className="recover-password-container">
            {(isRecoverPasswordLoading || isUpdatePasswordLoading) ? renderLoading : renderContent}
        </div>
    );
}

RecoverPassword.propTypes = {
    isRecoverPasswordLoading: PropTypes.bool.isRequired,
    token: PropTypes.string,
    isUpdatePasswordLoading: PropTypes.bool.isRequired,
    isPasswordUpdated: PropTypes.bool.isRequired,
    recoverPassword: PropTypes.func.isRequired,
    updatePassword: PropTypes.func.isRequired,
    restart: PropTypes.func.isRequired,
};

export default RecoverPassword;