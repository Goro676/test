import {memo} from "react"
const SelectCons = memo (({post,index}) => {
    return (
        <>
        <div>
           <img src={post.flags.png}></img>
           <h2>{post.name.common}</h2>
           <p>Capital {post.capital}</p>
           <p>Population {post.population}</p>
           <p>Continent {post.continent}</p>
           <p>Time Zone : {post.timezones}</p>
           <div><img src={post.coatOfArms.svg} className='coat'></img></div>
           <p>IDD: {post.idd.root} {post.idd.suffixes}</p>
        </div>
        </>
    )
})
export default SelectCons;