import { useEffect, useState } from "react";
import axios from "axios"

const Posts = () => {
    const [data, setData] = useState([]);
    const [max, setMax] = useState(0);
    const [isFetch, setIsFetch] = useState(true);
    const [page, setPage] = useState(1);
    useEffect(() => {
        if(isFetch && (data.length < max || max === 0)) {
            axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`).then(response => {
                const data = response.data.map( post => ({
                    ...post, 
                    isReaded:false
                }));
                setMax(+response.headers['x-total-count']);
                setData(prevData => [...prevData, ...data]);
                setPage(prev => prev + 1);
            }).finally(() => {
                setIsFetch(false);  
            }); 
        }
    }, [isFetch]);
    console.log(data)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll); 
    }, []);

    const handleScroll = (e) => {
        const {scrollHeight, scrollTop} = e.target.documentElement
    
        let i_h = window.innerHeight;
        if(scrollHeight - scrollTop - i_h < 400) {
            setIsFetch(true);
        }
    }

    return(
        <div>
            {data.map((post,index,) => {
                return <div key={index}>
                      <h3>{post.id}</h3>
                      <h3>{post.title}</h3>
                      <p>{post.body}</p>
                    </div>
            })}
        </div>
    );
}
export default Posts;