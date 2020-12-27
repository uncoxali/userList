import React, { Componetnt, useEffect, useState } from 'react';
import axios from 'axios'
const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '5fe72277a2e68d54d0fb964d';

const App = (props) => {
    const [users, setUser] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
            .then(res => res.json())
            .then(json => setUser(json.data))
    }, []);

    useEffect(() => {
        setFilteredCountries(
            users.filter((user) =>
                user.lastName.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, users]);

    return (
        <>
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
            <ul>
                {filteredCountries.map(user => <li key={user.id}>{user.lastName}</li>)}
            </ul>
        </>
    )
}

export default App