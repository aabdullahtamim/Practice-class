import { Button } from "@/components/ui/button";
import { useState } from "react"


function Array() {

    const [num, setNum] = useState([
        1, 2, 3, 4, 5
    ]);

    const [count, setCount] = useState(0)

    const handleClick = () => {
        num[1] = 400;

        setNum(
            num.map(10)
        )
    }

    return (
        <div>
            {num.join('-')}

            <Button onClick={handleClick}>Click here</Button>

            <Button onClick={() => setCount(prev => ++prev)}>{count}</Button>

        </div>
    )
}

export default Array;