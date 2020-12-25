import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '{5fe5f86de8038213973737d5}';

const App = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
            .then(({ data }) => setData(data))
            .catch(console.error)
            .finally(() => setLoading(false));
        console.log(data)
    }, []);

    return (
        <div>
            {loading && "Loading..."}
            {JSON.stringify(data)}
        </div>
    );
};

export { App };