import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 text-center"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold leading-tight"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m Omkar 👋<br />
        Full-Stack Developer
      </motion.h1>

      <motion.p
        className="mt-6 max-w-xl text-lg md:text-xl text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        I build fast, secure, and scalable web apps using <span className="text-blue-400 font-medium">React</span>, <span className="text-green-400 font-medium">Node.js</span>, and <span className="text-yellow-400 font-medium">MongoDB</span>.
      </motion.p>

      <motion.div
        className="mt-8 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <Link to="projects"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold"
        >
          View Projects
        </Link>
        <Link to="contact"
          className="px-6 py-3 border border-white hover:bg-white hover:text-gray-900 transition rounded-lg font-semibold"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;
