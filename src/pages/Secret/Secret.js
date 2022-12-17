import axios from 'axios';
import { useEffect } from 'react';

const Secret = () => {
    useEffect(() => {
        (async () => {
            const res = await axios.get('http://localhost/react-hooks-api/api/users');
            console.log(res);
        })();
    }, []);

    return (
        <>
            <h1>Secret Page</h1>
        </>
    );
};

export default Secret;
