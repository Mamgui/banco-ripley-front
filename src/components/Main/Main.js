import React from 'react';
import PropTypes from "prop-types";
import LoginContainer from "../../containers/LoginContainer/LoginContainer";
import LogoutContainer from "../../containers/LogoutContainer/LogoutContainer";

const welcomeMessage = "Hola!"
const loadingMessage = "Cargando..."

function Main({isLoggedIn, isLoginLoading}) {
    const renderLoading = <p>{loadingMessage}</p>

    const renderForm = isLoggedIn ? <LogoutContainer/> : <LoginContainer/>;

    return (
        <div>
            <h1>{welcomeMessage}</h1>
            {isLoginLoading ? renderLoading : renderForm}
        </div>
    )
}

Main.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    isLoginLoading: PropTypes.bool.isRequired
};

export default Main;