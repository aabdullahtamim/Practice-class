import { Button } from "@/components/ui/button";
import { useState } from "react";


function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <Button className="bg-cyan-300" onClick={() => setCount((prev) => prev + 1)}> Count is: {count}</Button>
        </div>
    )
}

export default Counter;