import CardItem from "./CardItem";
import hikeImg from "../../public/Hike.png";
import portfolioImg from "../../public/Portfolio.png";
import barbershopImg from "../../public/Barbershop.png";

function Card() {
  const WORK_DATA = [
    {
      id: 1,
      title: "Pack for Hike",
      img: hikeImg,
      location: "https://pack-for-hike.vercel.app/",
      github: "https://github.com/OlgaMinaievaWebDev/pack-for-hike",
      description: "",
      technologies: "React, HTML, CSS",
    },
    {
      id: 2,
      title: "Portfolio Website",
      img: portfolioImg,
      location: "https://olga-minaieva-personal-website.vercel.app/",
      github: "https://github.com/OlgaMinaievaWebDev/personal-website-new",
      description: "",
      technologies: "React + Vite, HTML, TailwindCSS",
    },
    {
      id: 3,
      title: "Barbershop Website",
      img: barbershopImg,
      location: "https://barbershop-six-flax.vercel.app/",
      github: "https://github.com/OlgaMinaievaWebDev/barbershop",
      description: "",
      technologies: "React + Vite, HTML, TailwindCSS",
    },
  ];

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-start justify-start">
      {WORK_DATA.map((item) => (
        <CardItem key={item.id} project={item} />
      ))}
    </ul>
  );
}

export default Card;
