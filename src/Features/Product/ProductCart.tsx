import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdStar } from "react-icons/io";

const ProductCart = () => {
    return (
        <div className="border border-gray-300 rounded-md p-2 cursor-pointer ">
            <img src="./public/Products-img/Book-01.png" alt="Book-1" />
            <h5 className="text-[14px] dark:text-white/85">THE BIG DEAL ..... 6 step formula</h5>
            <span className="text-[12px] dark:text-[#8C8C8C]">Comedy/Drama</span>
            <div className="flex gap-x-1 text-[14px] ">
                <IoMdStar className="text-[20px] text-theme" />
                <IoMdStar className="text-[20px] text-theme" />
                <IoMdStar className="text-[20px] text-theme" />
                <IoMdStar className="text-[20px] text-theme" />
                <IoMdStar className="text-[20px] text-theme" />
            </div>
            <div className="flex justify-between items-center mt-2">
                <button className="bg-theme rounded-md p-2 text-sm h-[30px] w-[calc(100%-60px)] flex justify-center items-center cursor-pointer">$140 | Add to cart</button>
                <button className="w-[30px] h-[30px] border border-theme text-theme rounded-md flex justify-center items-center  cursor-pointer">
                    <IoMdHeartEmpty />
                </button>
            </div>
        </div>
    )
}

export default ProductCart
