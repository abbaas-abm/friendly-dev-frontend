import type { Route } from "./+types";
import type { Project } from "~/types";
import type { StrapiResponse, StrapiProject } from "~/types";
import { useState } from "react";
import ProjectCard from "~/components/ProjectCard";
import Pagination from "~/components/Pagination";
import Category from "~/components/Category";
import { AnimatePresence, motion } from "framer-motion";
const API_URL = import.meta.env.VITE_API_URL;
const ROOT_URL = import.meta.env.VITE_STRAPI_URL;

  export async function loader ({request}: Route.LoaderArgs):Promise<{projects: Project[]}> {
      const req = await fetch(`${API_URL}/projects?populate=*`);
      
      if (!req.ok) throw new Response('Something went wrong :(', {status: 400});

      const jsonData:StrapiResponse<StrapiProject> = await req.json();

      const projects = jsonData.data.map(item => (
        {
          id: item.id,
          documentId: item.documentId,
          title: item.title,
          description: item.description,
          image: item.image?.url ? item.image.url : '/images/no-image.png',
          url: item.url,
          featured: item.featured,
          date: item.date,
          category: item.category
        }
      ))

      return {projects};
  }

const ProjectPage = ({loaderData}: Route.ComponentProps) => {

  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [currentPage, setCurrentPage] = useState<number>(1);
  const projectsPerPage = 10;
  
  const {projects} = loaderData;

  // Category Filtering
  const categories = ['All', ...new Set(projects.map(project => project.category))]

  const filteredProjects = selectedCategory === 'All' 
      ? projects
      : projects.filter(project => project.category === selectedCategory);
  
  // Calculate the total amount of pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage); 
 
  // Get projects for current page
  const indexOfLast = currentPage * projectsPerPage; 
  const indexOfFirst = indexOfLast - projectsPerPage; 

  // Current Pages Projects
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);


  return (
    <div className="mt-30 flex flex-col items-center justify-center">
      <div className="w-[80%]">
        <h1 className="font-black text-center text-white text-3xl">Projects</h1>
        <Category categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        {/* Project Grid */}
        <AnimatePresence mode="wait">
            <motion.div layout className="grid sm:grid-cols-2 gap-6 my-6 items-stretch">
              {currentProjects.map(project => <motion.div key={project.id} layout><ProjectCard project={project}/></motion.div>)}
            </motion.div>
        </AnimatePresence>

        {totalPages > 1 && <Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>}
      </div>
    </div>
  )
}
export default ProjectPage
