const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold">About Me</h2>
      <p className="max-w-2xl mt-4 text-center">
       {`I'm a passionate Frontend Developer with nearly 3 years of experience crafting responsive and secure web interfaces.
      I specialize in building scalable and accessible applications using modern technologies like React.js, JavaScript,
      HTML, and CSS. In my current role, I've contributed to features across various modules including Deposits, Loans,
      Pre-login flows, Security Q&A, VAPT, and Sonar issue resolution.`}
      </p>
    </section>
  );
};

export default About;
