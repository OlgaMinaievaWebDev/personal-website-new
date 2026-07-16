import { FaArrowRight } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-[72px] bg-brand-cream px-8 py-16 text-brand-charcoal md:px-16 lg:px-24"
    >
      <div className="mx-auto max-w-7xl border-t border-brand-peach pt-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange-dark">
          Get in touch
        </p>
        <h2
          id="contact-heading"
          className="mt-2 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl"
        >
          Let&apos;s connect.
        </h2>

        <p className="mt-4 max-w-xl leading-relaxed text-gray-600 md:text-lg">
          Have a frontend opportunity or an interesting project in mind?
          I&apos;d be happy to hear from you.
        </p>

        <a
          href="mailto:minaeva9@gmail.com?subject=Frontend%20opportunity%20for%20Olga"
          className="group mt-6 inline-flex min-h-11 items-center gap-3 rounded-lg bg-brand-orange px-5 py-2.5 font-semibold text-white transition-colors hover:bg-brand-orange-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-orange-light/60"
        >
          Send an email
          <FaArrowRight
            aria-hidden="true"
            focusable="false"
            className="transition-transform group-hover:translate-x-1"
          />
        </a>

        <nav aria-label="Social profiles" className="mt-6">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <li className="text-gray-500">Or find me on</li>
            <li>
              <a
                href="https://github.com/OlgaMinaievaWebDev/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded font-semibold underline decoration-brand-peach decoration-2 underline-offset-4 transition-colors hover:text-brand-orange-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-orange-light/60"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/olga-minaieva-370279154/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded font-semibold underline decoration-brand-peach decoration-2 underline-offset-4 transition-colors hover:text-brand-orange-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-orange-light/60"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Contact;
