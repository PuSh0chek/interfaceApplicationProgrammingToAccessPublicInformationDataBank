import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderNavBar.css';

function HeaderNavBar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/Authorization">
                            <button>Авторизация</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Registration">
                            <button>Регистрация</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Content">
                            <button>Контентная страница</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Administration">
                            <button>Администрирование</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Error">
                            <button>Страница с ошибкой</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default HeaderNavBar;
