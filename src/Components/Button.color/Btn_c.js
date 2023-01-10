import { useState } from "react"
import "./Btn_c.css"

 const  ButtonColor = () => {
    const[changeColor, setColor] = useState(false)

    const toggle = () => {
        setColor(!changeColor)
    }
    // const style = {
    // background:changeColor ? "red" : "blue" && "orange"
    // }
    return (
        <div>
            <button className="button" onClick={toggle} style={{background:changeColor ?"red" : "blue" &&"orange"}}>Click Me</button>
        </div>
    )
    
}
// background:changeColor? "orange" : "blue"
export default ButtonColor;