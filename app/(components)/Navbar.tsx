import NavItem from "./NavItem";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <nav className="flex justify-around py-4 bg-slate-100 h-16 items-center dark:bg-secondary dark:text-white">
      <NavItem text="Home" href="/" />
      <NavItem text="Contact" href="/contact" />
      <NavItem text="About the Creator" href="https://aidantomcy.github.io" />
      <ThemeButton />
    </nav>
  );
};

export default Navbar;
