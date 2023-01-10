import { useEffect, useState } from "react";
import axios from "axios"
import SetCom from "../SetCom/SetCom";


const Comp = () => {
    const[data, setData] = useState([]);
    const[isFetch, setIsFetch] = useState(true);
    const [max, setMax] = useState(0);

    useEffect(() => {
        if(isFetch && ( data.length < max || max === 0)) {
            axios.get("https://jsonplaceholder.typicode.com/photos?_limit=20&_page=1").then(response => {

                const photo = response.data.map(posts => ({
                    ...posts,
              
                    isCheked:false
                }))
                setMax(+response.headers['x-total-count']);
                setData (prevData => [...prevData, ...photo])
            }).finally(() => {
                setIsFetch(false)
            });

        }
    }, [isFetch]);

    
// console.log(data);
    return (
        <div>
            <h2>Posts</h2>
            {data.map(item => {
                return (
                    <div key={item}>
                        <SetCom url={item.url}/>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}
export default Comp;