

const Posts = (props) => {
    const { user } = props
    return (
        <div className="card mt-5 d-flex justify-content-center">
            <img src={user.image} alt="Avatar" style={{ width: '250px' }} />
            <div className="container">
                <h4><b>{user.text}</b></h4>
                <p>{user.publishDate}</p>
            </div>
            <div className="user-profile">
                <ul className="data">
                    <li>
                        <span className="entypo-heart">{user.likes}</span>
                    </li>
                    <li>
                        <span className="entypo-eye"> 853</span>
                    </li>
                    <li>
                        <span className="entypo-user"> 311</span>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Posts;