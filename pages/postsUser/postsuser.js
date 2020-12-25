

const PostUser = (props) => {
    const { post } = props
    return (
        <>
            <h1 className="title-pen"> {post.body} <span></span></h1>
            <div className="user-profile">
                <img className="avatar" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTF_erFD1SeUnxEpvFjzBCCDxLvf-wlh9ZuPMqi02qGnyyBtPWdE-3KoH3s" alt="Ash" />
                <div className="username">{post.title}</div>
                <div className="bio">
                    Senior UI Designer
  </div>
                <div className="description">
                    I use to design websites and applications
                    for the web.
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
                <h1>inspired by
  <a href="">
                        <span className="entypo-dribbble"></span> shot</a>
                </h1>
            </footer>
        </>
    )
}

export default PostUser;