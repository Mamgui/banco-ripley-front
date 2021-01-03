import React, {useState} from "react";
import PropTypes from "prop-types";
import './Login.scss'
import {Link} from "react-router-dom";

const userNameLabel = 'Nombre de usuario'
const passwordLabel = 'Contraseña'
const loginButton = 'Iniciar sesión'
const recoverPasswordAnchor = 'Recuperar contraseña'
const registerAnchor = 'Crear cuenta'
const loadingMessage = "Cargando..."

function Login({isLoginLoading, login}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleOnChange = (event, setter) => {
        setter(
            event.target.value
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(username, password)
    }

    const renderForm = (
        <>
            <form>
                <label>{userNameLabel}
                    <input type="text" name="username" value={username}
                           onChange={(event) => handleOnChange(event, setUsername)}/>
                </label>
                <label>{passwordLabel}
                    <input type="password" name="password" value={password}
                           onChange={(event) => handleOnChange(event, setPassword)}/>
                </label>
                <input type="submit" value={loginButton} onClick={handleSubmit}/>
            </form>
            <Link to="/recover-password">{recoverPasswordAnchor}</Link>
            <Link to="/register">{registerAnchor}</Link>
        </>
    )

    const renderLoading = <p>{loadingMessage}</p>

    return (
        <div className="login-container">
            {isLoginLoading ? renderLoading : renderForm}
        </div>
    );
}

Login.propTypes = {
    isLoginLoading: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
};

export default Login;