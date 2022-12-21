import classNames from 'classnames/bind';
import { useParams, useLocation } from 'react-router-dom';

import styles from './BlogDetail.module.scss';
import useFetch from '~/hooks/useFetch';
import Loading from '~/components/Loading';

const cx = classNames.bind(styles);

const BlogDetail = () => {
    const { id } = useParams();
    const { data: postData, isLoading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const { hash } = useLocation();

    console.log(hash);

    return (
        <>
            <h1>Blog Detail Page With ID: {id}</h1>

            {isLoading && <Loading />}

            {postData && !isLoading && (
                <div className={cx('wrapper')}>
                    <h2 className={cx('title')}>{postData.title}</h2>
                    <div className={cx('content')}>{postData.body + postData.body}</div>
                    <div className={cx('content')}>{postData.body + postData.body + postData.body}</div>
                    <div className={cx('content')}>{postData.body}</div>
                    <div className={cx('content')}>{postData.body + postData.body + postData.body + postData.body}</div>
                </div>
            )}
        </>
    );
};

export default BlogDetail;
