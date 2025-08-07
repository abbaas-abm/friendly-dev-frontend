import { Link } from "react-router";
import type { Project } from "~/types";

const ProjectCard = ({project}: {project: Project}) => {
  return (
    <Link to={`/projects/${project.documentId}`}>
      <div className="flex flex-col transition-all rounded-lg hover:scale-105 hover:border hover:border-green-400">
      <img src={project.image} className="h-40 object-cover rounded-t-lg" alt="" />
      <div className="bg-gray-900 rounded-b-lg p-3">
        <h1 className="text-2xl text-green-500 my-2 font-bold">{project.title}</h1>
        <p className="text-gray-500 my-2">{project.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-sm bg-green-400 rounded-lg p-2">{project.category}</span>
          <span className="text-sm">{new Date(project.date).toISOString().split("T")[0]}</span>
        </div>
      </div>
    </div>
    </Link>
  )
}
export default ProjectCard