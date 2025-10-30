import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react";

function Searchbar() {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full"><Search /></Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Search in Blog </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Input id="name-1" name="name" placeholder="Search here...." />
                        </div>
                    </div>
                    <DialogFooter>
                        <div className="mr-auto">
                            <DialogClose asChild className="mr-4">
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Search</Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}

export default Searchbar;