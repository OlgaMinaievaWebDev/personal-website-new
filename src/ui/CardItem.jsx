import PropTypes from "prop-types";

function CardItem({ project }) {
  const { title, description, location, github, technologies, img } = project;

  return (
    <li className="bg-card-surface border border-card-border rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start gap-6 shadow-md hover:shadow-xl transition-shadow w-full">
      {/* Text Content */}
      <div className="flex flex-col space-y-3 flex-1 min-h-[200px] w-full md:w-[60%]">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-300 flex-grow">{description}</p>
        <p className="text-sm text-gray-400">Technologies: {technologies}</p>
        <div className="flex gap-4 mt-3">
          {location && (
            <a
              href={location}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange-soft underline transition-colors duration-200 hover:text-brand-orange-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange-light rounded"
            >
              Live Site
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange-soft underline transition-colors duration-200 hover:text-brand-orange-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange-light rounded"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Image Container */}
      {img && (
        <div className="w-full md:w-[40%] relative aspect-video flex-shrink-0 overflow-hidden rounded-xl shadow-inner transition-transform duration-300 hover:scale-105">
          <img
            src={img}
            alt={`${title} website preview`}
            width="1200"
            height="675"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      )}
    </li>
  );
}

CardItem.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string,
    github: PropTypes.string,
    technologies: PropTypes.string.isRequired,
    img: PropTypes.string,
  }).isRequired,
};

export default CardItem;
