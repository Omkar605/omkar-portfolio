import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import sampleResume from "../assets/resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);

  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">My Resume</h1>
      <div className="border border-gray-700 p-4 rounded-lg bg-gray-800">
        <Document file={sampleResume} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={1.2} />
          ))}
        </Document>
      </div>
      <a
        href={sampleResume}
        download="resume.pdf"
        className="mt-4 bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
