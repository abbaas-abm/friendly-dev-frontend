import { FaMap, FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const LeftColumnAbout = ({homePage} : {homePage: boolean}) => {
  return (
       <div className="w-full p-4 text-center md:text-start">
            <h2 className="font-medium text-2xl text-white">Abbaas Mhlongo {homePage && ' 👋'}</h2>
            <p className="my-3 text-gray-500 leading-relaxed">
            Abbaas Mhlongo is a passionate South African tech innovator, full-stack developer, and law student at the University of the Witwatersrand. Founder of Mega Development Studios and YouthInTech SA.
            </p>
            <ul className="space-y-4">
                <li className="flex items-center gap-4">
                    <FaPhone className="text-3xl text-green-500 bg-gray-900 rounded p-2"/>
                    <span>(+27) 064-039-0409</span>
                </li>
                <li className="flex items-center gap-4">
                    <FaEnvelope className="text-3xl text-green-500 bg-gray-900 rounded p-2"/>
                    <span>abbaasmhlongo@gmail.com</span>
                </li>
                <li className="flex items-center gap-4">
                    <FaMap className="text-3xl text-green-500 bg-gray-900 rounded p-2"/>
                    <span>Johannesburg, South Africa.</span>
                </li>
                <li className="flex items-center gap-4">
                    <FaGithub className="text-3xl text-green-500 bg-gray-900 rounded p-2"/>
                    <span>@abbaas-abm</span>
                </li>
            </ul>

            {homePage && 
            <Link 
            to={`/about`}
            className="underline mt-5 block text-white text-lg"
            >Learn More</Link>
            }
        </div>
  )
}
export default LeftColumnAbout