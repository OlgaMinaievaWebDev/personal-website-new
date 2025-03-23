function Projects() {
  return (
    <section className="py-16 bg-gradient-to-b from-background-light to-background-dark text-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-highlight animate-fade-in">
          My Projects
        </h2>
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 space-y-6 lg:space-y-0 animate-slide-in">
          {/* Pack for Hike Project Card */}
          <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Pack for Hike</h3>
            <iframe
              src="https://pack-for-hike.vercel.app/"
              width="100%"
              height="400"
              style={{ border: "none" }}
              title="Pack for Hike"
              className="rounded-lg"
            ></iframe>
            <div className="mt-4 text-center">
              <a
                href="https://pack-for-hike.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold text-lg hover:text-accent-light"
              >
                View Pack for Hike
              </a>
            </div>
          </div>

          {/* Weather App Project Card */}
          <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Weather App</h3>
            <iframe
              src="https://weather-app-blond-psi.vercel.app/"
              width="100%"
              height="400"
              style={{ border: "none" }}
              title="Weather App"
              className="rounded-lg"
            ></iframe>
            <div className="mt-4 text-center">
              <a
                href="https://weather-app-blond-psi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold text-lg hover:text-accent-light"
              >
                View Weather App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
