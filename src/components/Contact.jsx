import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-start w-full p-24 bg-gradient-to-r from-[#FF6F00] to-[#FF9100] text-white space-y-8"
    >
      <div>
        <h2 className="text-4xl text-white inline-block">Get in Touch</h2>
        <div className="h-1 w-[60px] bg-white mb-6"></div>

        <p className="text-lg mb-6">
          I'm always open to new opportunities and collaborations! Whether you
          have a question, want to work together, or just want to say hi, feel
          free to drop me a message.
        </p>

        <div className="flex gap-6 mb-6">
          <a
            a
            href="mailto:minaeva9@gmail.com?subject=Hello%20Olga&body=I%20would%20like%20to%20connect%20with%20you..."
            className="text-white hover:text-orange-300 transition"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://github.com/OlgaMinaievaWebDev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-300 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/olga-minaieva-370279154/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-300 transition"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
     
    </section>
  );
}

export default Contact;
