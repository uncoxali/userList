

const Profile = (props) => {
    const { user } = props
    return (
        <>
            <h1 className="title-pen"> {user.name} <span></span></h1>
            <div className="user-profile">
                <img className="avatar" src={user.picture} alt="Ash" />
                <div className="username">{user.lastName}</div>
                <div className="bio">
                    {user.firstName}
                </div>
                <div className="description">
                    {user.email}
                </div>
                <ul className="data">
                    <li>
                        <span className="entypo-heart"> 127</span>
                    </li>
                    <li>
                        <span className="entypo-eye"> 853</span>
                    </li>
                    <li>
                        <span className="entypo-user"> 311</span>
                    </li>
                </ul>
            </div>
            <footer>
                <h1>{user.title}
                    <a href="">
                        <span className="entypo-dribbble"></span> shot</a>
                </h1>
            </footer>
        </>
    )
}

export default Profile;