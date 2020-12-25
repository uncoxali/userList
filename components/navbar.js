import Link from 'next/link'

const NavBar = () => {
    return (
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
        </ul>
    )
}

export default NavBar;