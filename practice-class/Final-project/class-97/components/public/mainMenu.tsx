import ProductCart from "@/components/productCart";
import ProductSearchForm from "@/components/searchForm";
import Logo from "@/components/ui/logo";
import { GitCompareArrows, Heart } from "lucide-react";
import Link from "next/link";


export default function PublicMainMenu() {
    return (
        <div className="py-4">
            <div className="body-container">
                <div className="flex items-center">
                    <Link href={"/"}>
                        <Logo />
                    </Link>
                    <ProductSearchForm />
                    <div>
                        <div className="flex gap-x-12">
                            <Link href={"/"} className="flex flex-col justify-center items-center">
                                <GitCompareArrows size={22} />
                                <span className="text-xs">Compare</span>
                            </Link>
                            <Link href={"/"} className="flex flex-col justify-center items-center">
                                <Heart size={22} />
                                <span className="text-xs">Wishlist</span>
                            </Link>
                            <ProductCart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
