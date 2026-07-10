import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-[72px] flex flex-col justify-center items-start w-full p-8 md:p-16 lg:p-24 bg-brand-cream text-brand-charcoal space-y-8"
    >
      <div>
        <h2 className="text-4xl text-brand-charcoal inline-block">
          Get in Touch
        </h2>
        <div className="h-1 w-[60px] bg-brand-orange mb-6"></div>

        <p className="text-base md:text-lg mb-6">
          I&apos;m always open to new opportunities and collaborations! Whether
          you have a question, want to work together, or just want to say hi,
          feel free to drop me a message.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-6">
          <a
            href="mailto:minaeva9@gmail.com?subject=Hello%20Olga&body=I%20would%20like%20to%20connect%20with%20you..."
            aria-label="Email Olga Minaieva"
            className="text-brand-orange hover:text-brand-orange-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://github.com/OlgaMinaievaWebDev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Olga Minaieva's GitHub profile"
            className="text-brand-orange hover:text-brand-orange-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/olga-minaieva-370279154/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Olga Minaieva's LinkedIn profile"
            className="text-brand-orange hover:text-brand-orange-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
