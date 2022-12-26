import classNames from 'classnames/bind';
import { NavLink, useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const handleNext = () => {
        navigate(+1);
    };

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
                        <NavLink to="/covid" className={(nav) => cx({ active: nav.isActive })}>
                            Covid 19
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

                <div className={cx('back-wrapper')}>
                    <button className={cx('back-btn')} onClick={handleBack}>
                        Back
                    </button>
                    <button className={cx('back-btn')} onClick={handleNext}>
                        Next
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;
