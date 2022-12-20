import classNames from 'classnames/bind';
import moment from 'moment/moment';

import Loading from '~/components/Loading';
import useFetch from '~/hooks/useFetch';
import styles from './Covid.module.scss';

const cx = classNames.bind(styles);

const Covid = () => {
    // const today = new Date();
    // const priorDate = moment().subtract(30, 'days');

    // const { data: patients, isLoading } = useFetch(
    //     `https://api.covid19api.com/country/vietnam?from=${priorDate.toISOString()}&to=${today.toISOString()}`,
    // );

    const today = moment().startOf('day').toISOString(true);
    const priorDate = moment().startOf('day').subtract(31, 'days').toISOString(true);

    const { data: patients, isLoading } = useFetch(
        `https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`,
    );

    return (
        <>
            <h1>Covid Page</h1>

            {isLoading && <Loading />}

            {patients && patients.length > 0 && !isLoading && (
                <table className={cx('table')}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Confirmed</th>
                            <th>Deaths</th>
                            <th>Recovered</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient) => (
                            <tr key={patient.ID}>
                                <td>{moment(patient.Date).format('DD/MM/YYYY')}</td>
                                <td>{patient.Confirmed}</td>
                                <td>{patient.Deaths}</td>
                                <td>{patient.Recovered}</td>
                                <td>{patient.Active}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default Covid;
