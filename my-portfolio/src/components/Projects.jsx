const projects = [
    { title: "Spotify Clone", description: "A full-stack music streaming web app.", link: "#" },
    { title: "JS Form Validator", description: "A custom JavaScript form validation library.", link: "#" },
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
        <h2 className="text-4xl font-bold">Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-700 p-4 rounded-lg bg-gray-800">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <a href={project.link} className="text-blue-400 hover:underline mt-2 inline-block">View Project</a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  