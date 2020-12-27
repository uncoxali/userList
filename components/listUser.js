import Link from 'next/link';


const ListUser = props => {
    return (
        <div className="container">
            <ul className="card">
                {
                    props.posts.map(post => {
                        return (
                            <li className="nav-link" key={post.id}>
                                <img className="user" src={post.name} alt="Ash" />
                                <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                                    <a className="link">{post.text}</a>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ListUser;


// import Link from 'next/link';

// //components
// const Users = props => {

//     return (
//         <div className="container">
//             <ul className="wrapper">
//                 {
//                     props.users.map(user => {
//                         return (
//                             <li className="nav-link item" key={user.id}>
//                                 <img className="avatar" src={user.picture} alt="Ash" />
//                                 <Link href="/users/[id]" as={`/users/${user.id}`}>
//                                     <a className="link">{user.lastName}</a>
//                                 </Link>
//                             </li>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }

// export default Users;