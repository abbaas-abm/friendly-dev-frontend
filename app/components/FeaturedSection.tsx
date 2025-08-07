import ProjectCard from "./ProjectCard";
import type { Project } from "~/types";

type FeaturedSectionProps = {
    projects: Project[]; 
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({projects}) => {

    // const featuredProjects = projects.filter(project => project.featured);
  return (
   <div className="mt-30 mb-7 flex items-center justify-center w-full flex-col">
            <h1 className="text-2xl text-white font-black text-center mb-4">Featured Projects</h1>
           <div className="grid gap-6 grid-cols-1 items-stretch w-[80%] md:grid-cols-2">
               {projects.map(project => <ProjectCard key={project.id} project={project}/>)}
           </div>
    </div>
  )
}
export default FeaturedSection