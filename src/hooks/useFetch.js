import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        try {
            (async () => {
                setIsLoading(true);

                const res = await axios.get(url);

                setData(res.data);
                setIsLoading(false);
            })();
        } catch (e) {
            alert(e.message);
        }
    }, [url]);

    return {
        data,
        isLoading,
    };
};

export default useFetch;
