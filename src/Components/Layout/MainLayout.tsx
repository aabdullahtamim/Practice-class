import ProductCart from "../../Features/Product/ProductCart";
import ProductList from "../../Features/Product/ProductList";
import Footer from "./Footer";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

function MainLayout() {
    return (
        <>
            <Header />
            <div className="h-[calc(100vh-110px)]">
                <div className="flex relative h-[calc(100vh-110px)]">
                    <LeftSidebar />

                    <ProductList>
                        <ProductCart />
                    </ProductList>

                    <RightSidebar />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MainLayout;