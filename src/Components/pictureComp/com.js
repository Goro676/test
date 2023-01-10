import { useEffect, useState } from "react"
import PostP from "../PostPicture/PostP"
import "./com.css"
import axios from "axios"
// const Component = () => {
// const [posts, setPosts] = useState([])
// const [page, setPage] =useState(1)
// fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20&_page=1`).then(response => response.json()).then(posts => {
//         // setPosts(posts)
//         console.log(posts);
// } )
// return (
//     <div>
//         {posts.map(post => <PostP  key={post.id} id={post.id} url={post.url}/>)}
//         <button>ShowMore</button>
//     </div>
// )
// }
// export  default Component ;


const Phot = () => {
    const[data, setData] = useState([]);
    const[isFetch, setIsFetch] = useState(true);
    const [max, setMax] = useState(0);
    const[page, setPage] = useState(1)

    useEffect(() => {
        if(isFetch && ( data.length < max || max === 0)) {
            axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}`).then(response => {
                const data = response.data.map(post => ({
                    ...post,
                    isReaded:false
                }))
                
                setMax(+response.headers['x-total-count']);
                setData (prevData => [...prevData, ...data])
            }).finally(() => {
               
                setIsFetch(false)
            });

        }
    }, [isFetch]);

console.log(data);
    return (
        <div>
            {data.map(post => <PostP key={post.id} id={post.id} url={post.url}/>)}
            <button onClick={() => {
                 setPage(page + 1)
            }}>Show More</button> 
        </div>
    )
}
export default Phot;