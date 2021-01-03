import PropTypes from "prop-types";
import React from "react";
import './Logout.scss'

const logoutButtonMessage = "Cerrar sesión"

function Logout({logout}) {
    return (
        <div className="logout-container">
            <button onClick={() => logout()}>{logoutButtonMessage}</button>
        </div>
    );
}

Logout.propTypes = {
    logout: PropTypes.func.isRequired,
};

export default Logout;