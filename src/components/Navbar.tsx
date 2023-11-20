import { Link } from "react-scroll";

interface NavbarLinks {
  title: string;
  link: string;
}

const Navbar = () => {
  const links: NavbarLinks[] = [
    { title: "Home", link: "/" },
    { title: "About", link: "about" },
    { title: "Skills", link: "skills" },
    { title: "Projects", link: "projects" },
    { title: "Contact", link: "contact" },
  ];

  return (
    <ul className="flex justify-between items-center h-[70px] gap-[50px]">
      {links.map((link) => (
        <Link
          to={link.link}
          smooth
          key={link.title}
          className="cursor-pointer text-[20px]"
        >
          {link.title}
        </Link>
      ))}
    </ul>
  );
};

export default Navbar;
