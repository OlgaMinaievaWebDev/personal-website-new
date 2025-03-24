import Card from "../ui/Card";

function Work() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-start w-full p-24 bg-gradient-to-r from-[#FF6F00] to-[#FF9100] text-white space-y-8"
    >
      <h2 className="text-4xl text-white inline-block">My Work</h2>
      <div className="h-1 w-[60px] bg-white"></div>
      <div className="w-full">
       
       
         <Card/>
        
        </div>
    
    </section>
  );
}

export default Work;
