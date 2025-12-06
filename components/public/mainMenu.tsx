import ProductCart from "@/components/productCart";
import MainMenuMobile from "@/components/public/mainMenuMobile";
import ProductSearchForm from "@/components/searchForm";
import Logo from "@/components/ui/logo";
import { GitCompareArrows, Heart } from "lucide-react";
import Link from "next/link";


export default function PublicMainMenu() {
    return (
        <div className="py-4 relative">
            <div className="body-container">
                <div className="flex items-center">
                    <Link href={"/"}>
                        <Logo />
                    </Link>
                    <div className="flex-1 hidden  lg:flex">
                        <ProductSearchForm />
                        <div className="pr-7">
                            <div className="flex gap-x-15 pl-5">
                                <Link href={"/"} className="flex-box flex-col relative">
                                    <span className="absolute -top-1.5 right-0 min-w-4 h-4 text-xs flex-box bg-primary text-white rounded-full">0</span>
                                    <GitCompareArrows size={22} />
                                    <span className="text-xs mt-2">Compare</span>
                                </Link>
                                <Link href={"/"} className="flex-box flex-col relative">
                                    <span className="absolute -top-1.5 right-0 min-w-4 h-4 text-xs flex-box bg-primary text-white rounded-full">0</span>
                                    <Heart size={22} />
                                    <span className="text-xs mt-2">Wishlist</span>
                                </Link>
                                <ProductCart />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 lg:hidden">
                        <MainMenuMobile />
                    </div>
                </div>
            </div>
        </div>
    )
}
