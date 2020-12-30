import React, {useState} from "react";
import PropTypes from "prop-types";

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
        <form>
            <label>Nombre de usuario
                <input type="text" name="username" value={username}
                       onChange={(event) => handleOnChange(event, setUsername)}/>
            </label>
            <label>Contraseña
                <input type="password" name="password" value={password}
                       onChange={(event) => handleOnChange(event, setPassword)}/>
            </label>
            <input type="submit" value="Aceptar" onClick={handleSubmit}/>
        </form>
    );
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
};

export default Login;