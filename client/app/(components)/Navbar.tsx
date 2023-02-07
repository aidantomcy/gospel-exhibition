import NavItem from "./NavItem";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <nav className="flex justify-around py-4 bg-slate-100 h-16 items-center dark:bg-secondary dark:text-white">
      <NavItem text="Home" />
      <NavItem text="Contact" />
      <NavItem text="About the Creator" />
      <ThemeButton />
    </nav>
  );
};

export default Navbar;
