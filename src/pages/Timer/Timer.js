import CountDown from '~/components/CountDown';
import ClassCountDown from '~/components/ClassCountDown';

const Timer = () => {
    const handleTimesup = () => {
        alert('Times Up');
    };

    return (
        <>
            <h1>Timer Page</h1>
            <ClassCountDown handleTimesup={handleTimesup} />
            <hr />
            <CountDown handleTimesup={handleTimesup} />
        </>
    );
};

export default Timer;
