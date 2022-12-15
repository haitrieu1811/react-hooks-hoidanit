import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './DefaultLayout.module.scss';
import Header from '../components/Header';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
    return (
        <>
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('container')}>{children}</div>
            </div>
        </>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
