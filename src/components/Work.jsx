import ProjectList from "../ui/ProjectList";

function Work() {
  return (
    <section
      id="work"
      className="scroll-mt-[72px] flex flex-col justify-start items-start w-full p-8 md:p-16 lg:p-24 bg-brand-charcoal text-white space-y-8"
    >
      <div className="w-full">
        <h2 className="text-4xl text-white">Selected Projects</h2>
        <div className="h-1 w-[60px] bg-brand-orange-light mt-2 mb-6"></div>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-300">
          Selected work in frontend architecture, accessible interfaces, and
          API-driven applications.
        </p>
        <ProjectList />
      </div>
    </section>
  );
}
export default Work;
