import classNames from 'classnames/bind';

import styles from './BlogCreate.module.scss';

const cx = classNames.bind(styles);

const BlogCreate = () => {
    return (
        <>
            <h1>Blog Create Page</h1>

            <div className={cx('wrapper')}>
                <div className={cx('group')}>
                    <label htmlFor="title" className={cx('label')}>
                        Title:{' '}
                    </label>
                    <input type="text" id="title" className={cx('input')} />
                </div>

                <div className={cx('group')}>
                    <label htmlFor="content" className={cx('label')}>
                        Content:{' '}
                    </label>
                    <input type="text" id="content" className={cx('input')} />
                </div>

                <div className={cx('group')}>
                    <button className={cx('submit')}>Create</button>
                </div>
            </div>
        </>
    );
};

export default BlogCreate;
