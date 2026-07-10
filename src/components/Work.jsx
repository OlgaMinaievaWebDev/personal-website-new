import Card from "../ui/Card";

function Work() {
  return (
    <section
      id="work"
      className="scroll-mt-[72px] flex flex-col justify-start items-start w-full p-8 md:p-16 lg:p-24 bg-brand-charcoal text-white space-y-8"
    >
      <div className="w-full">
        <h2 className="text-4xl text-white">My Work</h2>
        <div className="h-1 w-[60px] bg-brand-orange-light mt-2 mb-6"></div>
        <Card />
      </div>
    </section>
  );
}
export default Work;
