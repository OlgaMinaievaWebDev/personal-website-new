import ProjectCard from "./ProjectCard";
import { projects } from "./projects";

function ProjectList() {
  return (
    <ul className="grid w-full grid-cols-1 gap-8 xl:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  );
}

export default ProjectList;
