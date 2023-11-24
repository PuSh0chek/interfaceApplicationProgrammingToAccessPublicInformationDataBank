import React from 'react';
import { Link } from 'react-router-dom';

const Authorization = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/Authorization">Авторизация</Link>
                    </li>
                    <li>
                        <Link to="/Registration">Регистрация</Link>
                    </li>
                    <li>
                        <Link to="/ContentPage">Контентная страница</Link>
                    </li>
                    <li>
                        <Link to="/Administraiton">Администрирование</Link>
                    </li>
                    <li>
                        <Link to="/Error">Страница с ошибкой</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Authorization;
