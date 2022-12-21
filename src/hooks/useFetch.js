import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const ourRequest = axios.CancelToken.source();

        (async () => {
            try {
                setIsLoading(true);

                let res = await axios.get(url, {
                    cancelToken: ourRequest.token,
                });

                let data = res && res.data ? res.data : [];
                // data = data.reverse();

                setData(data);
                setIsError(false);
                setIsLoading(false);
            } catch (err) {
                if (axios.isCancel(err)) {
                    console.log('Request Canceled', err.message);
                } else {
                    setIsError(true);
                    setIsLoading(false);
                }
            }
        })();

        return () => {
            ourRequest.cancel('Operation canceled by the user.');
        };
    }, [url]);

    return {
        data,
        isLoading,
        isError,
    };
};

export default useFetch;
