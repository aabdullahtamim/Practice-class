const FoodCartSection = (props) => {
    //    let title = props.title 

    return (
        <section>
            <h1 className="text-3xl font-bold underline"> {props.title} </h1>
            {props.children}
        </section>
    );
}

export default FoodCartSection;                              