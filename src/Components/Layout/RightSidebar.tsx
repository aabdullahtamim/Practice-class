import { GrFormNext } from "react-icons/gr";

interface ListItemsProps {
    title: string;
    icon: React.ReactNode;
}

const ListItems: React.FC<ListItemsProps> = ({ title, icon }) => {
    return (
        <li>
            <button className="px-6 py-[2px] flex items-center w-full cursor-pointer dark:text-white/60 hover:bg-theme hover:text-dark transition-all">
                {icon}
                <span className="">{title}</span>
            </button>
        </li>
    );
}


function RightSidebar() {
    return (
        <div className="p-2.5 border-l border-gray-300 w-[180px] h-full absolute right-0 top-0 ">
            <strong className=" px-4 py-2 dark:text-white/80">
                Filter On Page
            </strong>
            <div className="mt-2">
                <ul>

                    <ListItems title="By name" icon={<GrFormNext />} />
                    <ListItems title="By rating" icon={<GrFormNext />} />
                    <ListItems title="By price" icon={<GrFormNext />} />
                </ul>
            </div>
        </div >
    );
}

export default RightSidebar;
