/* eslint-disable @typescript-eslint/no-explicit-any */
import { productsData } from "./data";
import ProductCart from "./ProductCart";


const ProductList = ({ setCarts }: { setCarts: any }) => {

    return (

        <div className="grid grid-cols-4 gap-3 p-3 ml-[180px] w-[calc(100%-360px)] overflow-y-scroll ">

            {productsData.map(products => <ProductCart setCarts={setCarts} key={products.id} products={products} />)}


        </div>
    )
}

export default ProductList;