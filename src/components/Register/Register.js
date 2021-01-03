import React, {useState} from "react";
import PropTypes from "prop-types";
import './Register.scss'
import {Link} from "react-router-dom";

const userNameLabel = 'Nombre de usuario'
const passwordLabel = 'Contraseña'
const acceptButton = 'Aceptar'
const goBackAnchor = 'Volver atrás'
const registeredMessage = 'Felicitaciones! has creado tu cuenta'
const loadingMessage = "Cargando..."

function Register({isRegisterLoading, isRegistered, register, restart}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleOnChange = (event, setter) => {
        setter(
            event.target.value
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        register(username, password)
    }

    const renderForm = (
        <form>
            <label>{userNameLabel}
                <input type="text" name="username" value={username}
                       onChange={(event) => handleOnChange(event, setUsername)}/>
            </label>
            <label>{passwordLabel}
                <input type="password" name="password" value={password}
                       onChange={(event) => handleOnChange(event, setPassword)}/>
            </label>
            <input type="submit" value={acceptButton} onClick={handleSubmit}/>
        </form>
    )

    const renderRegistered = <p>{registeredMessage}</p>

    const renderContent = (
        <>
            <Link to="/" onClick={restart}>{goBackAnchor}</Link>
            {isRegistered ? renderRegistered : renderForm}
        </>
    )

    const renderLoading = <p>{loadingMessage}</p>

    return (
        <div className="register-container">
            {isRegisterLoading ? renderLoading : renderContent}
        </div>
    );
}

Register.propTypes = {
    isRegisterLoading: PropTypes.bool.isRequired,
    isRegistered: PropTypes.bool.isRequired,
    register: PropTypes.func.isRequired,
    restart: PropTypes.func.isRequired,
};

export default Register;