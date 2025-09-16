
import { reducer } from "@/components/Practice/Child/Reducer";
import { Button } from "@/components/ui/button";
import { useReducer } from "react";


function TestReducer() {

    // const [count, setCount] = useState(0);

    const [count, dispatch] = useReducer(reducer, 0);

    const add = () => {
        dispatch({
            payload: 'add'
        })
    }

    const del = () => {
        dispatch({
            payload: 'del'
        })
    }

    return (
        <>
            {/* {count > 0 && <Counter />}
            <div className="border p-4 mt-3">
                <Button className="flex gap-2 bg-cyan-300" onClick={() => setCount((prev) => prev + 1)}>Plus</Button>
                <h1>{count}</h1>
                <Button className="flex gap-2 bg-cyan-300" onClick={() => setCount((prev) => prev - 1)}>Minus</Button>
            </div> */}



            <div className="border p-4 mt-3">
                <Button className="flex gap-2 bg-cyan-300" onClick={add}>add</Button>
                <h1>{count}</h1>
                <Button className="flex gap-2 bg-cyan-300" onClick={del}>Del</Button>
            </div>




        </>
    )
}

export default TestReducer;