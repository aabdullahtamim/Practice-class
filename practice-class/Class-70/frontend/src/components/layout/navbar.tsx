import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggler";
import Searchbar from "@/components/modules/search/Search";
import NavMenu from "@/components/ui/nav-menu";
import { NavigationSheet } from "@/components/ui/navigation-sheet";
import { Link } from "react-router";
import { Logo } from "@/components/ui/Logo";

const Navbar = () => {
  return (
    <div className="bg-muted relative z-20">
      <nav className="fixed top-3 inset-x-4 h-14 bg-background border dark:border-slate-700/70 max-w-(--breakpoint-xl) mx-auto rounded-full">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="hidden sm:inline-flex rounded-full"
            >
              <Link to={"/login"}> Login</Link>
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
