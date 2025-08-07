import type { Route } from "./+types/details";
import type { Project } from "~/types";
import type { StrapiResponse, StrapiProject } from "~/types";
import { FaCode } from "react-icons/fa";
const API_URL = import.meta.env.VITE_API_URL;
const ROOT_URL = import.meta.env.VITE_STRAPI_URL;


export async function loader({request, params}: Route.LoaderArgs):Promise<StrapiProject> {
    const {id} = params;

    const req = await fetch(`${API_URL}/projects?filters[documentId][$eq]=${id}&populate=*`);

    if (!req.ok) throw new Response('Something went wrong :(', {status: 400});

    const jsonData:StrapiResponse<StrapiProject> = await req.json();

    const project =jsonData.data[0];


    return project;
}

const Details = ({loaderData}: Route.ComponentProps) => {

    const project:StrapiProject = loaderData;

  return (
     <div className="mt-30 flex flex-col items-center justify-center w-full">
        <div className="flex flex-col w-[80%]">
            <h1 className="text-center font-bold text-4xl mb-3">{project.title}</h1>
            <img src={project?.image?.url ? project.image.url : '/images/no-image.png'} className="w-full h-80 object-cover rounded-lg" alt="" />
            <div className="flex items-center justify-between mt-2">
                <p className="text-gray-600">{new Date(project.date).toISOString().split("T")[0]}</p>
                <p className="bg-green-500 text-white font-bold p-2 rounded-lg">{project.category}</p>
            </div>

            <div className="flex items-center justify-center my-5 w-full max-md:flex-col">
                <div className="bg-green-500 p-5 w-full md:w-[300px] h-40 flex items-center justify-center md:rounded-l-lg ">
                    <FaCode className="text-white text-4xl"/>
                </div>
                <div className="bg-gray-900 w-[100%] h-40 p-5 md:rounded-r-lg flex items-center rounded-b-lg">
                    <p className="text-white">{project.description}</p>
                </div>
            </div>
            <a 
            href={project.url}
            target="_blank"
            className="text-lg underline text-white my-2 block text-center"
            >Learn More</a>
        </div>
    </div>
  )
}
export default Details