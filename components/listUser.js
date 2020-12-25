import Link from 'next/link';


const ListUser = props => {
    return (
        <>
            <ul className="list card">
                {
                    props.userposts.map(user => {
                        return (
                            <li className="user" key={user.id}>
                                <img className="user" src="https://cdn.luxatic.com/wp-content/uploads/2019/05/Sylvester-Stallone.jpg" alt="Ash" />
                                <Link href="/users/[id]" as={`/users/${user.id}`}>
                                    <div className="d-inline">
                                        <a className="link">{user.username}</a>
                                        <a className="d-block"> {user.email} </a>
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default ListUser;