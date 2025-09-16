
function Accordion({ activeIndex, onShow }) {



    return (
        <div className="border mb-3">
            <h1 onClick={() => onShow()} className="bg-blue-500 text-white p-2 cursor-pointer">This is Heading</h1>
            {activeIndex &&
                <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus eos natus modi quaerat, optio dolorum magnam, quas, quae doloribus velit dolorem maiores. Quis ipsa dolorum molestias nulla commodi sunt! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, quibusdam ducimus facere quos laboriosam cupiditate iure voluptatem molestias veniam quam neque! Natus dignissimos ullam quod, est laboriosam amet dolorum facere.</p>
            }

        </div>
    )
}

export default Accordion;