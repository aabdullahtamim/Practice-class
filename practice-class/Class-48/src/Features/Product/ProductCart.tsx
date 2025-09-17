/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import ProductDetailsPopup from "./ProductDetailsPopup";
import { useState } from "react";
import type { IProduct } from "./data";


const ProductCart = ({ products, setCarts }: { products: IProduct, setCarts: any }) => {

    console.log(products);


    const [isOpen, SetIsOpen] = useState(false);

    return (
        <div className="border border-gray-300 rounded-md p-2 pb-3.5 ">
            <img onClick={() => SetIsOpen(!isOpen)} className="cursor-pointer" src={products.image} alt="Book-1" />
            <h5 onClick={() => SetIsOpen(!isOpen)} className="text-[14px] dark:text-white/85 cursor-pointer hover:text-theme">{products.name}</h5>
            <span className="text-[12px] dark:text-[#8C8C8C]">{products.category}</span>
            <div className="flex gap-x-1 text-[14px] ">
                <IoMdStar className="text-[20px] text-theme" />
                <IoMdStar className="text-[20px] text-theme" />
                <IoMdStar className="text-[20px] text-theme" />
                <IoMdStar className="text-[20px] text-theme" />
                <IoMdStar className="text-[20px] text-theme" />
            </div>
            <div className="flex justify-between items-center mt-2">
                <button onClick={() => setCarts(products)} className="bg-theme rounded-md p-2 text-sm h-[30px] w-[calc(100%-60px)] flex justify-center items-center cursor-pointer">{products.price} | Add to cart</button>
                <button className="w-[30px] h-[30px] border border-theme text-theme rounded-md flex justify-center items-center  cursor-pointer">
                    <IoMdHeartEmpty />
                </button>
            </div>
            {isOpen && <ProductDetailsPopup products={products} onClose={() => SetIsOpen(false)} />}
            {/* <YourCart /> */}
        </div>
    )
}

export default ProductCart
