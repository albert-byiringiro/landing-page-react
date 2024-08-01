import navList from "../data/headerNavbar";
import { NavLinks } from "../types/Types";
const Navbar = () => {
  const navEls = navList.map((nav: NavLinks) => (
    <li className="uppercase text-gray-600" key={nav.id}>
      <a href={nav.url} className="">
        {nav.title}
      </a>
    </li>
  ));

  return (
    <header className=" px-4 flex items-center py-6 justify-around shadow-md">
      <h1 className="uppercase font-semibold text-gray-900 text-2xl">
        React Landing Page
      </h1>
      <nav className="">
        <ul className="flex space-x-10 flex-wrap">{navEls}</ul>
      </nav>
    </header>
  );
};

export default Navbar;
