import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
    { name: "React", icon: <FaReact />, color: "text-blue-400" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-500" },
    { name: "GitHub", icon: <FaGithub />, color: "text-gray-500" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background-light to-background-dark text-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-highlight">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${skill.color}`}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
