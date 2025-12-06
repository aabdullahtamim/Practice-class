import Accordion from "@/components/Practice/Child/Accordion"
import { useState } from "react";


function UseState() {
    // const [open, setOpen] = useState(false);

    const [activeIndex, setActiveIndex] = useState(999);

    // const handleShow = (index) => {
    //     console.log(index);
    //     setActiveIndex(index)
    // }

    return (
        <div >
            {/* <Accordion activeIndex={activeIndex === 0} /> */}
            {/* <Accordion index={0} activeIndex={activeIndex === 0} onShow={handleShow} /> */}

            <Accordion activeIndex={activeIndex === 0} onShow={() => setActiveIndex(0)} />
            <Accordion activeIndex={activeIndex === 1} onShow={() => setActiveIndex(1)} />
            <Accordion activeIndex={activeIndex === 2} onShow={() => setActiveIndex(2)} />
            <Accordion activeIndex={activeIndex === 3} onShow={() => setActiveIndex(3)} />
        </div>
    )
}

export default UseState