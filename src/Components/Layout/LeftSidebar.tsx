import { FiSearch } from "react-icons/fi";
import { FaFireFlameCurved } from "react-icons/fa6";
import { MdDriveFolderUpload } from "react-icons/md";
import { MdOutlineUpcoming } from "react-icons/md";
import { BsSave } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import Searchbar from "../../Features/Searchbar/Searchbar";
import { useState } from "react";


const ListItems = ({ title, icon }: {
    title: string;
    icon: React.ReactNode
}) => {
    return (
        <li>
            <button className="px-4 py-2 mb-2 border border-gray-300 rounded-md flex items-center w-full cursor-pointer dark:text-white/80 hover:bg-theme hover:text-dark transition-all">
                {icon}
                <span className="ml-2.5">{title}</span>
            </button>
        </li>
    );
};


function LeftSidebar() {


    const [isSearchShow, setIsSearchShow] = useState(false);


    const isSearchHandler = () => {
        setIsSearchShow(!isSearchShow)

    }



    return (
        <div className="p-2.5 border-r border-gray-300 w-[180px] h-full absolute left-0 top-0 ">
            <div onClick={() => setIsSearchShow(!isSearchShow)} className="flex items-center border-[1.5px] border-theme px-4 py-2 rounded-md relative">
                <FiSearch className="dark:text-white/90 text-[18px] absolute top-1/2 left-[20px] -translate-1/2" />
                <span className="dark:text-white/90 text-[15px] pl-5 ">Search Book.....</span>
            </div>
            <div className="mt-3">
                <ul>
                    <ListItems title="Trending" icon={<FaFireFlameCurved />} />
                    <ListItems title="New Releases" icon={<MdDriveFolderUpload />} />
                    <ListItems title="Saved" icon={<BsSave />} />
                    <ListItems title="Coming Soon " icon={<MdOutlineUpcoming />} />
                    <ListItems title="Favorites" icon={<IoMdHeartEmpty />} />
                </ul>
            </div>

            {isSearchShow && <Searchbar isSearch={isSearchHandler} />}
        </div >
    );
}

export default LeftSidebar;


