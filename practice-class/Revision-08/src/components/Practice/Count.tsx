import { useState } from "react";


function Count() {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => prev + 5)
        console.log(count);

    }

    return (

        <div>
            <h1 onClick={handleClick}>{count}</h1>
        </div>
    )
}

export default Count