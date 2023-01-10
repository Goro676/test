import { useState } from "react";
import "./Box.css";
import images from "./../../img/index"//shat nkari depqum kirarvume e ES5
// import img1 from "./../../img.b.jpg"//mi nkari depqum ES6

const Box = () => {
    const[show, setShow] = useState(true)
    // const img1 = require("./../../img/a.jpg")
    // console.log(images);
    return (
        <div>
           {show && <h1> Hello</h1>}
           <img src={images.img1}/>
           <img src={images.img2}/>
        </div>
    )
}
export default Box;