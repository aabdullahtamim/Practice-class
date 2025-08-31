import { IoCloseOutline } from "react-icons/io5";
import YourCartItem from "./YourCartItem";




function YourCart() {
    return (
        <div className="w-full h-screen  backdrop-blur-sm  fixed top-0 left-0 z-10 flex justify-center items-start">
            <div className="w-[620px] bg-white overflow-hidden rounded-md border border-theme mt-[60px] relative">
                <IoCloseOutline className="text-xl absolute top-2.5 right-3.5 cursor-pointer" />
                <h2 className="text-center text-2xl font-bold py-4">Your Cart</h2>




                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="text-center h-[80px] pt-[30px]" >
                        <p> No Cart found</p>
                    </div>
                    <div className="h-[250px] overflow-y-scroll">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Quantity
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Total
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <YourCartItem />
                                <YourCartItem />
                                <YourCartItem />
                                <YourCartItem />
                                <YourCartItem />

                            </tbody>
                        </table>
                    </div>
                </div>

                <div className=" border-t border-gray-300 px-4 py-3 flex justify-between items-center">
                    <strong className="">Total : 1000</strong>
                    <button type="button" className="focus:outline-none text-white bg-theme hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 cursor-pointer">Checkout</button>

                </div>











            </div>
        </div>
    )
}

export default YourCart