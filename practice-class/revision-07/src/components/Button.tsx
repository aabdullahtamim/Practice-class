import { useState } from "react";


function Button() {

    const [count, setCount] = useState(0);



    return (
        <button onClick={() => setCount((prev) => prev + 1)} className="ml-5 mt-5 p-2.5 rounded-[5px] cursor-pointer bg-amber-500">count is :{count} </button>
    )
}

export default Button;