import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Searchbar } from "@/components/ui/searchbar";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className=" bg-white relative z-20">
      <nav className="fixed top-2 inset-x-4 h-15 bg-background border dark:border-slate-700/70 max-w-(--breakpoint-xl) mx-auto rounded-full">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <Link to={"/"}>
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="hidden sm:inline-flex rounded-full"
            >
              <Link to={"/login"}>
                Login
              </Link>
            </Button>
            <Searchbar />
            <ModeToggle />

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
