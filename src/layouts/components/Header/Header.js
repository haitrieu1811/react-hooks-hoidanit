import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <>
            <header className={cx('wrapper')}>
                <ul className={cx('content')}>
                    <li>
                        <NavLink to="/" className={(nav) => cx({ active: nav.isActive })}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/timer" className={(nav) => cx({ active: nav.isActive })}>
                            Timer
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/todo" className={(nav) => cx({ active: nav.isActive })}>
                            Todos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className={(nav) => cx({ active: nav.isActive })}>
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/secret" className={(nav) => cx({ active: nav.isActive })}>
                            Secret
                        </NavLink>
                    </li>
                </ul>
            </header>
        </>
    );
};

export default Header;
