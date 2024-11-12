import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
    { name: "React", icon: <FaReact />, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-500" },
    { name: "GitHub", icon: <FaGithub />, color: "text-gray-500" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  ];
  return (
    <section>
      <div>
        {skills.map((skill, index) => (
          <div key={index}>
            <div>{skill.icon}</div>
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
