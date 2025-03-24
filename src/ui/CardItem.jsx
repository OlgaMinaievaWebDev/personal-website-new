function CardItem({ project }) {
  const { title, description, location, github, technologies, img } = project;

  return (
    <li className="bg-gradient-to-br from-[#262626] to-[#1A1A1A] border border-[#333] rounded-2xl p-6 mb-6 flex justify-between items-center gap-6 shadow-md hover:shadow-lg transition-shadow h-[250px]">
      <div className="flex flex-col space-y-3 max-w-[70%] flex-grow">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
        <p className="text-sm text-gray-500">Technologies: {technologies}</p>
        <div className="flex gap-4 mt-3">
          {location && (
            <a
              href={location}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-300 underline transition-colors duration-200 hover:text-orange-500"
            >
              Live Site
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-300 underline transition-colors duration-200 hover:text-orange-500"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      {img && (
        <div className="w-52 h-36 overflow-hidden rounded-xl flex-shrink-0 shadow-inner transition-transform duration-300 hover:scale-105">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
    </li>
  );
}

export default CardItem;
