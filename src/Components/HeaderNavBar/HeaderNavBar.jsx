import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderNavBar.css';

function HeaderNavBar() {
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
                        <Link to="/Content">Контентная страница</Link>
                    </li>
                    <li>
                        <Link to="/Administration">Администрирование</Link>
                    </li>
                    <li>
                        <Link to="/Error">Страница с ошибкой</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default HeaderNavBar;
