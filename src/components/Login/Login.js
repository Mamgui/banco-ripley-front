import React, {useState} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const userNameLabel = 'Nombre de usuario'
const passwordLabel = 'Contraseña'
const acceptButton = 'Aceptar'
const recoverPasswordAnchor = 'Recuperar contraseña'

function Login({login}) {
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

    return (
        <div className="login-container">
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
            <Link to="/recover-password">{recoverPasswordAnchor}</Link>
        </div>
    );
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
};

export default Login;