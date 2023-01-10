import { useState } from "react";
import PostItem from "../Postitem/Postitem";
const Posts = () => {
        const [posts, setPosts] = useState([])
    fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(posts => {
            setPosts(posts)
    } )
    return (
        <div>
            <h2>Posts ({posts.length})</h2>
            {posts.map(post => <PostItem key={post.id} title={post.title} body={post.body} />)}
        </div>
    )
}
export default Posts;




