
import "./PostP.css"
import {memo} from "react"
const PostP = memo(({posts}) => {
    return (
        <div className="Component">
            <h2>{posts.albumId}</h2>
            <img src={posts.url}></img>
        </div>
    )
},(prev, next) => JSON.stringify(prev) === JSON.stringify(next))
export default PostP;