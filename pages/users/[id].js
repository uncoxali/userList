import fetch from 'node-fetch';
import Navbar from '../../components/navbar'
import Profile from '../users/profile'
import React, { useEffect, useState } from 'react';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '5fe5f86de8038213973737d5';

const SinglePost = props => {

    const [users, setUsre] = useState([])
    const { user } = props;

    useEffect(() => {
        fetch(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
            .then(res => res.json())
            .then(json => setUsre(json.data))
    }, []);
    return (
        <div className="container">
            <div>
                <Navbar />
            </div>
            <Profile user={user} />
        </div>
    )
}

export async function getStaticPaths() {

    let res = await fetch(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } });
    let users = await res.json();
    let list = await users.data;

    let paths = list.map(user => {
        return { params: { id: user.id.toString() } }
    })

    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({ params }) {

    // let res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    let res = await fetch(`${BASE_URL}/user/${params.id}`, { headers: { 'app-id': APP_ID } });

    let user = await res.json();


    return {
        props: {
            user
        }
    }
}

export default SinglePost;