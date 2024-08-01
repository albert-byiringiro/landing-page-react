import { nanoid } from "nanoid";
const navigationList = [
  "Features",
  "About",
  "Services",
  "Gallery",
  "Testimonials",
  "Team",
  "Contact",
];

const id = nanoid();

const Navbar = () => {
  const navEls = navigationList.map((nav) => (
    <li className="uppercase text-gray-600" key={id}>
      <a href="" className="">
        {nav}
      </a>
    </li>
  ));

  return (
    <header className=" px-4 flex items-center py-6 justify-around">
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
