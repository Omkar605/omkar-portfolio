
const Resume = () => {
  return (
    <div id="resume" className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-4xl font-bold mb-6">Resume</h2>
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
        <iframe
          src="/OmkarZagade_CV_2025.pdf"
          className="w-full h-[600px] mb-4"
          title="Resume Preview"
        ></iframe>
        <a
          href="/OmkarZagade_CV_2025.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};
export default Resume;