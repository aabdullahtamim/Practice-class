import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function ProductCart() {
    return (
        <div>
            <Link href={"/"} className="flex flex-col justify-center items-center">
                <ShoppingCart size={22} />
                <span className="text-xs">Cart</span>
            </Link>
        </div>
    )
}
