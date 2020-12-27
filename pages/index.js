import fetch from 'node-fetch';
import axios from 'axios'
import { React, useEffect, useState } from 'react';

// Components
import Users from '../components/users';
import ListUser from '../components/ListUser';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '5fe72277a2e68d54d0fb964d';

const Home = props => {

    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState()

    useEffect(() => {
        setLoading(true)
        fetch(`${BASE_URL}/user/`, { headers: { 'app-id': APP_ID } })
            .then(res => res.json())
            .then(json => setUsers(json.data))
    }, []);

    useEffect(() => {
        setLoading(true)
        fetch(`${BASE_URL}/post`, { headers: { 'app-id': APP_ID } })
            .then(res => res.json())
            .then(json => setPosts(json.data))
    }, []);

    return (
        <div className="container app">
            <div className="container text">
                <div className="">
                    <Navbar serach={users} />
                </div>
                {
                    !loading ? <h2>Loading...</h2>
                        : <Users users={users} />
                }
                <ListUser posts={posts} />
                {/* <ListUser users={users} /> */}
                {/* <Filters filter={props.users} /> */}
                {/* <ListUser posts={props.posts} /> */}
                {/* <Footer /> */}
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
