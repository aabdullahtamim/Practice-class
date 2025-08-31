/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiSearch } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";


const SearchItems = () => {
    return (
        <div className="flex px-[30px] py-2 bg-theme/35 mb-2.5">
            <div className="w-[50px] ">
                <img className="w-[50px] " src="./Products-img/Book-01.png" alt="Books" />
            </div>
            <div className="ml-[20px]">
                <h4 className="text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
                <span className="text-[12px] block">Lorem ipsum dolor sit amet consectetur.</span>
                <strong>BDT: 200 TK</strong>
            </div>
        </div>
    )
}

function Searchbar({ isSearch }: { isSearch: any }) {

    return (
        <div className="w-full h-screen bg-white/30 backdrop-blur-md  fixed top-0 left-0 z-10 flex justify-center items-start">
            <div className="w-[620px] py-4 bg-white rounded-md mt-[60px]">
                <div className="relative px-5 pb-3 border-b border-b-gray-300">

                    <FiSearch className="absolute top-1.5" />
                    <input className=" w-full pl-5 focus:outline-0" type="text" placeholder="" />
                    <IoCloseOutline onClick={() => isSearch()} className="absolute -top-3 right-3 text-[20px] cursor-pointer " />

                </div>
                <div className="text-center h-[100px] pt-[30px]" >
                    <p> No data found</p>
                </div>
                <div className="overflow-y-scroll h-[250px] ">
                    <SearchItems />
                    <SearchItems />
                    <SearchItems />
                    <SearchItems />
                    <SearchItems />

                </div>
            </div>
        </div>
    )
}

export default Searchbar