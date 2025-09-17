import { useState } from "react";
import ProductList from "../../Features/Product/ProductList";
import Footer from "./Footer";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

function MainLayout() {

    const [carts, setCarts] = useState([]);

    const handleSetCarts = (cart) => {
        console.log(cart);
    }

    return (
        <>
            <Header />
            <div className="h-[calc(100vh-110px)]">
                <div className="flex relative h-[calc(100vh-110px)]">
                    <LeftSidebar />

                    <ProductList setCarts={handleSetCarts} />

                    <RightSidebar />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MainLayout;