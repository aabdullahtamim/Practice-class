import { useEffect, useState } from "react";
import { AiOutlineSun } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { ThemeModeHandler } from "../../Utilis/ThemeModeHandler";
import YourCart from "../../Features/Cart/YourCart";



function Header() {

    const [isOpen, SetIsOpen] = useState(false);

    const [theme, setTheme] = useState("light-mode");
    console.log('hello-world');

    const clickHandler = () => {
        // ThemeModeHandler("dark-mode");
        setTheme((prev) => {
            if (prev == "dark-mode") {
                return "light-mode";
            } else {
                return "dark-mode";
            }
        });
    };


    useEffect(() => {
        ThemeModeHandler(theme);
    }, [theme])




    return (
        <>
            <header className="p-3 border-b border-gray-300 ">
                <div className="container mx-auto flex justify-between items-center">
                    <span className="font-bold text-2xl text-theme ">DivineBook</span>
                    <div className="flex gap-3">
                        <button className="p-2 border border-theme bg-theme/5  cursor-pointer rounded-md">
                            <GoBell className="text-theme" />
                        </button>
                        <button onClick={clickHandler} className="p-2 border border-theme bg-theme/5  cursor-pointer rounded-md">
                            <AiOutlineSun className="text-theme" />
                        </button>
                        <button onClick={() => SetIsOpen(!isOpen)} className="p-2 border border-theme bg-theme/5  cursor-pointer rounded-md">
                            <BsCart3 className="text-theme" />
                        </button>
                    </div>
                </div>
            </header>

            {isOpen && <YourCart onClose={() => SetIsOpen(false)} />}

        </>
    )
}

export default Header;