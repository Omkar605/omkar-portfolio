import { useState } from 'react';

const allProjects = [
  {
    title: "Recurring Payment Scheduler - \"Pay-Timely\"",
    description: "Full-stack payment app using React, Node.js, MongoDB.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/Omkar605/Pay-Timely",
    live: "https://pay-timely.vercel.app/"
  },
  {
    title: "Tours And Travels",
  description: "Full-stack travel booking app with React, Express, MongoDB.",
    tags: ["React", "Express", "MongoDB"],
    link: "github.com/Omkar605/ToursAndTravels",
    live: "https://tours-and-travels-nine.vercel.app/"
  },
  {
    title: "React Quiz App",
    description: "Interactive quiz app built with React, featuring multiple-choice questions and score tracking.",
    tags: ["React", "JavaScript", "CSS"],
    link: "https://github.com/Omkar605/React-Quiz-App",
    live: "https://react-quiz-app-omkar605.vercel.app/"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("");

  const filtered = allProjects.filter((p) =>
    p.title.toLowerCase().includes(filter.toLowerCase()) ||
    p.description.toLowerCase().includes(filter.toLowerCase()) ||
    p.tags.join(" ").toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div id="projects" className="min-h-screen p-8 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <input
        type="text"
        placeholder="Search by title or skill..."
        className="w-full p-3 rounded-lg text-white mb-6 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
        autoFocus
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((proj, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-300 mb-2">{proj.description}</p>
              <div className="text-sm text-gray-400 mb-4">{proj.tags.join(", ")}</div>
            </div>
           <div className='flex flex-row items-start justify-between'>
             <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-400 hover:text-blue-300 font-medium"
            >
              🔗 View Project
            </a>
             <a
              href={proj.live}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-400 hover:text-blue-300 font-medium"
            >
              🔗 Live Demo
            </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
