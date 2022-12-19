import { useEffect, useState } from 'react';

const CountDown = ({ handleTimesup }) => {
    const [count, setCount] = useState(5);

    useEffect(() => {
        if (count === 0) {
            handleTimesup();
            return;
        }

        const timer = setTimeout(() => {
            setCount(count - 1);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [count, handleTimesup]);

    return (
        <>
            <h1>{count}</h1>
        </>
    );
};

export default CountDown;
