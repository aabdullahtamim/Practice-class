import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Header = () => {
    return (
        <div>
            <Button asChild>
                <Link href={"/"}>Home</Link>
            </Button>
            <Button asChild>
                <Link href={"/blog"}>Blog</Link>
            </Button>
            <Button asChild>
                <Link href={"/blog/single-blog"}>Blog Details </Link>
            </Button>
        </div>
    )
}

export default Header