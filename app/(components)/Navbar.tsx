import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <nav className="bg-gray-200 rounded-2xl flex justify-center items-center dark:bg-dark-secondary w-11/12 md:w-3/4 lg:w-1/2 dark:text-white h-14">
        <NavItem text="Home" href="/" />
        <NavItem text="Contact" href="/contact" />
        <NavItem text="About the Creator" href="https://aidantomcy.github.io" />
      </nav>
    </div>
  );
};

export default Navbar;
