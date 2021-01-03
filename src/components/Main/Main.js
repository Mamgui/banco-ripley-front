import React from 'react';
import PropTypes from "prop-types";
import LoginContainer from "../../containers/LoginContainer/LoginContainer";
import LogoutContainer from "../../containers/LogoutContainer/LogoutContainer";

function Main({isLoggedIn}) {
    return (
        <>
            {isLoggedIn ? <LogoutContainer/> : <LoginContainer/>}
        </>
    )
}

Main.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
};

export default Main;