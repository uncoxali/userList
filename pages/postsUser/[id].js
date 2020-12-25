import fetch from 'node-fetch';
import Navbar from '../../components/navbar'
import PostUser from './postsuser';

const SinglePost = props => {
    const { post } = props;
    return (
        <div className="container">
            <div>
                <Navbar />
            </div>
            <PostUser post={post} />
        </div>
    )
}

export async function getStaticPaths() {

    // let resPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
    // let posts = await resPosts.json();

    let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let posts = await res.json();

    let paths = posts.map(post => {
        return { params: { id: post.id.toString() } }
    })

    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({ params }) {

    // let resPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
    // let posts = await resPosts.json();

    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    let post = await res.json();


    return {
        props: {
            post
        }
    }
}

export default SinglePost;