import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-white bg-gray-900">
      <motion.h1 
        className="text-5xl font-bold" 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p 
        className="mt-4 text-lg" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1 }}
      >
        I’m a Full-Stack Developer 🚀
      </motion.p>
    </section>
  );
};

export default Home;
