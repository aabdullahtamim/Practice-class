const FoodCartItem = () => {

    let myContent = "";
    let clickHandler = (data) => {
        alert(data);

    }


    return (
        <div>
            <div className="p-2 m-2 border border-gray-200 rounded-lg">
                Food Cart Item
            </div>

            <h2 className="text-2xl">this content is: {myContent} </h2>


            <button onClick={() => { clickHandler("this is after click content") }} className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Cart
            </button>
        </div>
    );
}
export default FoodCartItem;