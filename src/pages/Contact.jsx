import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const SERVICE_ID = "service_b8ppitk"; // Replace with your actual service ID
  const TEMPLATE_ID = "template_nlev23y"; // Replace with your actual template ID
  const PUBLIC_KEY = "pCP2UHaXJ8C27TCnE";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); // Corrected typo

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        setSuccessMessage("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending message", error);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background-light to-background-dark text-gray-100">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-highlight text-center">
          Contact Me
        </h2>
        <p className="text-center mb-8">
          Have a question or want to work together? Fill out the form below to
          get in touch!
        </p>

        {successMessage && (
          <p className="text-center mb-6 text-green-500">{successMessage}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
