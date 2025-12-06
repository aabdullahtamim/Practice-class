import { Button } from "@/components/ui/button"
import { useState } from "react";

function UseStatePr() {

    const [text, setText] = useState('');
    console.log(text);


    return (
        <>
            <input value={text} onChange={(e) => setText(e.target.value)} type="text" className="border-[2px]" />
            <Button onClick={() => setText('')}>Submit</Button>

            {text.length > 0 && <div>Typing...</div>}
            {text.length == 0 && <div>Type Done</div>}
            <div>Value is: {text}</div>
        </>
    )
}

export default UseStatePr;