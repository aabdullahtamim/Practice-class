import { IoMdHeartEmpty } from "react-icons/io"
import type { IProduct } from "./data"


function ProductDetailsPopup({ onClose, products }: { onClose: () => void, products: IProduct }) {
    return (
        <div className="w-full h-screen  backdrop-blur-sm  fixed top-0 left-0 z-10 flex justify-center items-start">
            <div className="w-[620px] bg-white overflow-hidden rounded-md border border-theme mt-[150px] flex">
                <div className="w-[calc(100%-150px)] p-4">
                    <h2 className="text-2xl font-bold">{products.name}</h2>
                    <span className="text-[12px]">{products.category}</span>
                    <p className="text-sm text-gray-700 mt-2 mb-3">{products.description}
                    </p>

                    <div className="flex ">
                        <button className="bg-theme rounded-md px-3 mr-4 text-sm h-[30px] w-[150px] cursor-pointer">{products.price} | Add to cart</button>
                        <button className="w-[30px] h-[30px] border border-theme text-theme rounded-md flex justify-center items-center cursor-pointer">
                            <IoMdHeartEmpty />
                        </button>
                        <button onClick={() => onClose()} className="bg-theme rounded-md px-5 text-sm ml-4 h-[30px] w-[100px] cursor-pointer">Close</button>
                    </div>
                </div>
                <div className="w-[150px]  pr-1">
                    <img className="w-full " src={products.image} alt="Book-1" />
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsPopup