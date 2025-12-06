import { Badge } from "@/components/ui/badge"
import { Link } from "react-router"


function NextPrevBlog() {
    return (
        <div className="container mx-auto mb-20">
            <ul className="flex justify-between">
                <li className="max-w-[320px] border bg-muted p-4 rounded-lg">
                    <Link to="/">
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, officiis.</h4>
                        <div className="flex items-center gap-3 justify-center py-5">
                            <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                                Technology
                            </Badge>
                            <span className="font-medium text-xs text-muted-foreground">
                                5 min read
                            </span>
                        </div>
                    </Link>
                </li>
                <li className="max-w-[320px] border bg-muted p-4 rounded-lg">
                    <Link to="/">
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, officiis.</h4>
                        <div className="flex items-center gap-3 justify-center py-5">
                            <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                                Technology
                            </Badge>
                            <span className="font-medium text-xs text-muted-foreground">
                                5 min read
                            </span>
                        </div>
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default NextPrevBlog