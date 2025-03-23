import Button from "../ui/Button";
function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-start w-full p-24 space-y-8 h-[100vh] bg-gradient-to-r from-[#FF6F00] to-[#FF9100] text-white"
    >
      <h1 className="text-5xl font-semibold leading-tight tracking-wide">
        Olga Minaieva
      </h1>
      <h3 className="text-xl font-light text-gray-200">
        A Front-End Developer based in Toronto, CA
      </h3>
      <Button>Get in touch</Button>
    </section>
  );
}
export default Hero