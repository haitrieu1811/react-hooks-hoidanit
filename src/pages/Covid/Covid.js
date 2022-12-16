import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';
import moment from 'moment/moment';

import styles from './Covid.module.scss';
import Loading from '~/components/Loading';

const cx = classNames.bind(styles);

const Covid = () => {
    const [loading, setLoading] = useState(true);
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.covid19api.com/country/vietnam', {
                params: {
                    from: '2021-10-15',
                    to: '2021-10-20',
                },
            })
            .then((res) => {
                setPatients(res.data);
            })
            .then(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            <h1>Covid Page</h1>

            {loading && <Loading />}

            {patients && patients.length > 0 && (
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
