import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="flex space-x-4 p-4 bg-gray-800 fixed w-full z-10">
      <Link to="home" smooth={true} duration={500} className="cursor-pointer">
        Home
      </Link>
      <Link to="about" smooth={true} duration={500} className="cursor-pointer">
        About
      </Link>
      <Link to="projects" smooth={true} duration={500} className="cursor-pointer">
        Projects
      </Link>
      <Link to="resume" smooth={true} duration={500} className="cursor-pointer">
        Resume
      </Link>
      <Link to="contact" smooth={true} duration={500} className="cursor-pointer">
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
