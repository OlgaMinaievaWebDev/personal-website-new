import CardItem from "./CardItem";
import portfolioImg from "/Portfolio.webp";
import barbershopImg from "/Barbershop.webp";

function Card() {
  const WORK_DATA = [
    {
      id: 2,
      title: "Portfolio Website",
      img: portfolioImg,
      location: "https://olga-minaieva-personal-website.vercel.app/",
      github: "https://github.com/OlgaMinaievaWebDev/personal-website-new",
      description:
        "My portfolio showcases my skills as a Front-End Developer, featuring interactive project displays and a modern, responsive design. Built with React and TailwindCSS, it reflects my expertise in creating clean, user-friendly websites.",
      technologies: "React + Vite, HTML, TailwindCSS",
    },
    {
      id: 3,
      title: "Barbershop Website",
      img: barbershopImg,
      location: "https://barbershop-six-flax.vercel.app/",
      github: "https://github.com/OlgaMinaievaWebDev/barbershop",
      description:
        "A booking platform for barbershops where customers can browse barbers, select services, and book appointments online. Built with React and Vite for a fast, responsive experience on both desktop and mobile.",
      technologies: "React + Vite, HTML, TailwindCSS",
    },
  ];

  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 w-full">
      {WORK_DATA.map((item) => (
        <CardItem key={item.id} project={item} />
      ))}
    </ul>
  );
}

export default Card;
