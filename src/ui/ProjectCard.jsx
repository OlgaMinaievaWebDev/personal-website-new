import PropTypes from "prop-types";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  const {
    title,
    role,
    image,
    problem,
    solution,
    contributions,
    outcome,
    technologies,
    liveUrl,
    sourceUrl,
  } = project;

  return (
    <li className="group flex h-full flex-col overflow-hidden rounded-2xl border border-card-border bg-card-surface shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative aspect-video overflow-hidden bg-brand-charcoal md:aspect-auto md:h-72 xl:h-60">
        <img
          src={image}
          alt={`${title} website preview`}
          width="1200"
          height="675"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        {role && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-orange-soft">
            {role}
          </p>
        )}
        <h3 className="text-2xl font-bold text-white md:text-3xl">{title}</h3>

        <dl className="mt-6 space-y-5 text-gray-300">
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wider text-brand-orange-soft">
              The challenge
            </dt>
            <dd className="mt-2 leading-relaxed">{problem}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wider text-brand-orange-soft">
              The solution
            </dt>
            <dd className="mt-2 leading-relaxed">{solution}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wider text-brand-orange-soft">
              The outcome
            </dt>
            <dd className="mt-2 leading-relaxed">{outcome}</dd>
          </div>
        </dl>

        <div className="mt-6">
          <h4 className="font-semibold text-white">My contribution</h4>
          <ul className="mt-3 space-y-2 text-gray-300">
            {contributions.map((contribution) => (
              <li key={contribution} className="flex gap-3 leading-relaxed">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange-light"
                />
                <span>{contribution}</span>
              </li>
            ))}
          </ul>
        </div>

        <ul
          className="mt-6 flex flex-wrap gap-2"
          aria-label={`${title} technologies`}
        >
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-brand-orange-light/40 bg-brand-charcoal px-3 py-1 text-sm font-semibold text-brand-orange-soft"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-card-border pt-6">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-brand-orange px-4 py-2 font-semibold text-white transition-colors hover:bg-brand-orange-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-orange-light/60"
          >
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            Live Demo
          </a>
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-gray-500 px-4 py-2 font-semibold text-white transition-colors hover:border-brand-orange-light hover:text-brand-orange-soft focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-orange-light/60"
          >
            <FaGithub aria-hidden="true" focusable="false" />
            Source Code
          </a>
        </div>
      </div>
    </li>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    role: PropTypes.string,
    image: PropTypes.string.isRequired,
    problem: PropTypes.string.isRequired,
    solution: PropTypes.string.isRequired,
    contributions: PropTypes.arrayOf(PropTypes.string).isRequired,
    outcome: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    liveUrl: PropTypes.string.isRequired,
    sourceUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
