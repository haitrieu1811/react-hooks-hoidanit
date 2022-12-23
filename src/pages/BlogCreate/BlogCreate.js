import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './BlogCreate.module.scss';

const cx = classNames.bind(styles);

const BlogCreate = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            alert('Empty title');
            return;
        }
        if (!content) {
            alert('Empty content');
            return;
        }

        console.log('>>> Check form data:', title, content);
    };

    return (
        <>
            <h1>Blog Create Page</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
                <div className={cx('wrapper')}>
                    <div className={cx('group')}>
                        <label htmlFor="title" className={cx('label')}>
                            Title:{' '}
                        </label>
                        <input
                            type="text"
                            id="title"
                            className={cx('input')}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className={cx('group', { invalid: false })}>
                        <label htmlFor="content" className={cx('label')}>
                            Content:{' '}
                        </label>
                        <input
                            type="text"
                            id="content"
                            className={cx('input')}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>

                    <div className={cx('group')}>
                        <button className={cx('submit')} type="submit">
                            Create
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default BlogCreate;
