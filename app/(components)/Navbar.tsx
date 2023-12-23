import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="flex justify-around py-4 bg-slate-100 h-16 items-center dark:bg-dark-secondary dark:text-white">
      <NavItem text="Home" href="/" />
      <NavItem text="Contact" href="/contact" />
      <NavItem text="About the Creator" href="https://aidantomcy.github.io" />
    </nav>
  );
};

export default Navbar;
