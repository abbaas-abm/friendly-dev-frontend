import { DiCss3, DiHtml5, DiJavascript1, DiMongodb, DiNodejs, DiPython, DiReact } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiJsonwebtokens, SiMongoose, SiRedux, SiStrapi, SiTypescript, SiVite } from "react-icons/si";


const RightColumnAbout = () => {
  return (
     <div className="w-full p-4 text-center md:text-start">
              <h2 className="font-medium text-2xl text-white">Professional Skills</h2>
              <p className="my-3 text-gray-500 leading-relaxed">
                Driven by a bold vision to revolutionize education, digital access, and tech inclusion across Africa, Abbaas is also a community advocate and aspiring polymath.
              </p>
    
              <div className="flex items-center justify-center flex-wrap gap-2">
                <DiHtml5 title="HTML 5" className="text-5xl text-green-500 bg-gray-900 rounded p-2 cursor-pointer transition-all hover:scale-105"/>
                <DiCss3 title="CSS 3" className="text-5xl text-green-500 bg-gray-900 rounded p-2 cursor-pointer transition-all hover:scale-105"/>
                <DiJavascript1 title="JavaScript" className="text-5xl text-green-500 bg-gray-900 rounded p-2 cursor-pointer transition-all hover:scale-105"/>
                <DiMongodb title="MongoDB" className="text-5xl text-green-500 bg-gray-900 rounded p-2 cursor-pointer transition-all hover:scale-105"/>
                <SiMongoose title="Mongoose" className="text-5xl text-green-500 bg-gray-900 rounded p-2 cursor-pointer transition-all hover:scale-105"/>
                <RiTailwindCssFill title="Tailwind CSS" className="text-5xl text-green-500 bg-gray-900 rounded p-2 cursor-pointer transition-all hover:scale-105"/>
                <SiTypescript title="TypeScript" className="text-5xl text-green-500 bg-gray-900 rounded p-2 cursor-pointer transition-all hover:scale-105"/>
                <DiReact title="ReactJS" className="text-5xl text-green-500 bg-gray-900 rounded p-2 cursor-pointer transition-all hover:scale-105"/>
                <SiExpress title="ExpressJS" className="text-5xl text-green-500 bg-gray-900 rounded p-2 cursor-pointer transition-all hover:scale-105"/>
                <DiNodejs title="NodeJS" className="text-5xl text-green-500 bg-gray-900 rounded p-2 cursor-pointer transition-all hover:scale-105"/>
                <SiRedux title="Redux & Redux Toolkit" className="text-5xl text-green-500 bg-gray-900 rounded p-2 cursor-pointer transition-all hover:scale-105"/>
                <SiJsonwebtokens title="Json Web Token" className="text-5xl text-green-500 bg-gray-900 rounded p-2 cursor-pointer transition-all hover:scale-105"/>
                <DiPython title="Python" className="text-5xl text-green-500 bg-gray-900 rounded p-2 cursor-pointer transition-all hover:scale-105"/>
                <SiVite title="Vite Build Tool" className="text-5xl text-green-500 bg-gray-900 rounded p-2 cursor-pointer transition-all hover:scale-105"/>
                <SiStrapi title="Strapi" className="text-5xl text-green-500 bg-gray-900 rounded p-2 cursor-pointer transition-all hover:scale-105"/>
              </div>
    </div>
  )
}
export default RightColumnAbout