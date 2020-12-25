import React, { Componetnt, useEffect, useState } from 'react';
import axios from 'axios'
const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '5fe5f86de8038213973737d5';

const App = () => {
    const [user, setUsre] = useState([])

    useEffect(() => {
        fetch(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
            .then(res => res.json())
            .then(json => setUsre(json.data))

    }, [])
    return (
        <>
            <ul>
                {
                    user.map(item => <li key={item.id}>{item.lastName}</li>)
                }
            </ul>
        </>
    )
}

export default App