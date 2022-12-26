import classNames from 'classnames/bind';

import styles from './Secret.module.scss';

const cx = classNames.bind(styles);

const Secret = () => {
    return (
        <>
            <h1>Secret Page</h1>
            <div className={cx('search-wp')}>
                <input type="text" className={cx('search-input')} placeholder="Search Something..." />
                <button type="submit" className={cx('search-submit')}>
                    Search
                </button>
            </div>
        </>
    );
};

export default Secret;
