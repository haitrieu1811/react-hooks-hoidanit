import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import useFetch from '~/hooks/useFetch';
import styles from './Blog.module.scss';
import Loading from '~/components/Loading';
import BasicModal from '~/components/BasicModal';

const cx = classNames.bind(styles);

const Blog = () => {
    const { data, isLoading } = useFetch('https://jsonplaceholder.typicode.com/posts');

    let dataBlogs;
    if (data && data.length > 0) {
        dataBlogs = data.slice(0, 12);
        console.log(dataBlogs);
    }

    return (
        <>
            {console.log('re-render')}
            <h1>Blog Page</h1>

            <BasicModal />

            {isLoading && <Loading />}

            {dataBlogs && dataBlogs.length > 0 && !isLoading && (
                <div className={cx('wrapper')}>
                    {dataBlogs.map((blog) => (
                        <div key={blog.id} className={cx('item')}>
                            <Link to={`/blog/${blog.id}`} className={cx('link')}>
                                <h3 className={cx('title')}>{blog.title}</h3>
                            </Link>
                            <p className={cx('body')}>{blog.body}</p>
                            <Link to={`/blog/${blog.id}`}>
                                <button className={cx('btn')}>View Detail</button>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Blog;
