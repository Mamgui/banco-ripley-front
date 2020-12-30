import PropTypes from "prop-types";

const logoutButtonMessage = "Cerrar sesión"

function Logout({logout}) {
    return (<button onClick={() => logout()}>{logoutButtonMessage}</button>);
}

Logout.propTypes = {
    logout: PropTypes.func.isRequired,
};

export default Logout;