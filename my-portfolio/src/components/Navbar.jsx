import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 fixed w-full top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">My Portfolio</h1>
        <div>
          <Link to="home" smooth className="text-white cursor-pointer px-4">Home</Link>
          <Link to="about" smooth className="text-white cursor-pointer px-4">About</Link>
          <Link to="projects" smooth className="text-white cursor-pointer px-4">Projects</Link>
          <Link to="resume" smooth className="text-white cursor-pointer px-4">Resume</Link>
          <Link to="contact" smooth className="text-white cursor-pointer px-4">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
