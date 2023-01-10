import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const countInc = () => {
        setCount(count + 1)
    }
    
    // const countMinus = () => {
    //     setCount(count -1)
    // }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={ countInc}>+</button>
            <button onClick={() => setCount(count => count -1)}disabled= {count ==0}>-</button>

        </div>
    );
}
export default Counter;