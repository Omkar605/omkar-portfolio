import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://your-vercel-backend-url.vercel.app/contact", formData);
      setStatus("Message sent successfully!");
    } catch (error) {
      setStatus("Error sending message.");
      console.log(error);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-800 text-white flex flex-col items-center py-10">
      <h2 className="text-4xl font-bold">Contact Me</h2>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 max-w-md w-full">
        <input type="text" name="name" placeholder="Your Name" required className="p-3 bg-gray-700 rounded" onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" required className="p-3 bg-gray-700 rounded" onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" required className="p-3 bg-gray-700 rounded" onChange={handleChange} />
        <button type="submit" className="bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded">Send Message</button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </section>
  );
};

export default Contact;