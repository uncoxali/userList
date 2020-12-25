import Link from 'next/link';


//components


const Users = props => {

    return (
        <>
            <ul className=" wrapper">
                {
                    props.users.map(user => {
                        return (
                            <li className="nav-link item" key={user.id}>
                                <img className="avatar" src={user.picture} alt="Ash" />
                                <Link href="/users/[id]" as={`/users/${user.id}`}>
                                    <a className="link">{user.lastName}</a>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Users;