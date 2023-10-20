import React from 'react';
import { Link } from "react-router-dom";

const Registration = () => {
    return(
        <div>
            Регистрация
            <Link to='/auth'>Авторизация</Link>
        </div>
    );
}
export default Registration;