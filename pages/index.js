import fetch from 'node-fetch';
import axios from 'axios'

// Components
import Users from '../components/users';
import ListUser from '../components/ListUser';
// import Filters from './../components/Filter'
import { React, useEffect, useState } from 'react';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '5fe5f86de8038213973737d5';

const Home = props => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState()

    useEffect(() => {
        setLoading(true)
        fetch(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
            .then(res => res.json())
            .then(json => setUsers(json.data))

    }, []);

    return (
        <div className="container mt-4 app">
            <div className="container text">
                <div className="d-flex ">
                    <h2 className="col-8">List Users</h2>
                    <input className="form-control" type="text" placeholder="search" />
                </div>
                {
                    !loading ? <h2>Loading...</h2> : (<Users users={users} />)
                }
                {/* <ListUser userposts={props.users} posts={props.posts} /> */}
                {/* <Filters filter={props.users} /> */}
                {/* <ListUser posts={props.posts} /> */}
            </div>
        </div>
    )
}

// export async function getStaticProps() {
//     let res = await fetch(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } });
//     let users = await res.json();
//     let list = await users.data;

//     // URL POSTS
//     // let res = fetch(`https://jsonplaceholder.typicode.com/posts`);
//     // let posts = res.json();

//     return {
//         props: {
//             users,
//         }

//     }
// }

export default Home;
