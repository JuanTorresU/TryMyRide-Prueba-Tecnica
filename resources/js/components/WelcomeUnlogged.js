import React from 'react';
import ReactDOM from 'react-dom';

function WelcomeUnlogged() {
    return (
        <div className="login">
            <button className="login__btn"><a href="login">Iniciar Sesión</a></button>
            <button className="login__btn"><a href="register">Registrarse</a></button>
            <button className="login__btn"><a href="editProfile">Editar Perfil</a></button>
        </div>
    );
}

export default WelcomeUnlogged;

if (document.getElementById('welcomeUnlogged')) {
    ReactDOM.render(<WelcomeUnlogged />, document.getElementById('welcomeUnlogged'));
}
