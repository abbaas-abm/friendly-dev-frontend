import { Link } from "react-router";
import { BiCodeCurly } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="mt-30 mb-7 flex items-center justify-center w-full max-md:flex-col">
        <div className="flex items-stretch justify-center gap-8 w-[80%] max-md:flex-col">
            {/* LEFT COLUMN */}
            <div className="bg-black border-white border rounded-lg w-[50%] p-5 max-md:w-full flex flex-col justify-center max-md:text-center max-md:items-center hover:scale-[1.01] transition-all duration-200 hover:border-green-600 cursor-pointer">
                <div className="">
                    <BiCodeCurly className="text-4xl my-4 max-md:flex max-md:items-center max-md:justify-center max-md:w-full"/>
                    <h1 className="text-xl font-black">Hi, I'm Abbaas 👨‍💻</h1>
                    <p className="my-5 leading-loose">
                        A full-stack web developer and digital innovator passionate about solving real-world problems with tech. Founder of Mega Development Studios. I build modern apps, games, and websites that make an impact.
                    </p>

                    <Link to={'/projects'}>
                        <button className="bg-white rounded-3xl py-2 px-4 text-black text-lg transition-all hover:-translate-1">
                            Explore My Work
                        </button>
                    </Link>
                </div>
                <img src="/code-img.png" className="size-44 object-contain" alt="" />
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex items-center flex-col justify-center w-[50%] gap-6 max-md:w-full max-md:text-center ">
                {/* TOP RIGHT */}
                <div className="bg-green-600 rounded-lg w-full p-5 hover:scale-[1.01] transition-all duration-200 cursor-pointer">
                     <h1 className="text-xl font-black">🛠️ My Tools of the Trade</h1>
                    <ul className="divide-green-300 divide-y my-3 space-y-5">
                        <li className="py-2 text-white text-sm">Frontend: JavaScript | React | HTML | Redux | Next.js</li>
                        <li className="py-2 text-white text-sm">Backend Node.js | Express | MongoDB | Firebase</li>
                        <li className="py-2 text-white text-sm">Git | Python | VS Code | Postman</li>
                        <li className="py-2 text-white text-sm">Desing: Tailwind CSS | CSS | Figma</li>
                    </ul>
                    <Link className="underline text-white" to={'/projects'}>Learn More</Link>

                </div>
                {/* Bottom Right */}
                <div className="bg-gray-900 rounded-lg w-full p-5 max-md:w-full border border-white hover:scale-[1.01] transition-all duration-200 hover:border-green-600 cursor-pointer">
                     <h1 className="text-xl font-black">🚀 Featured Project: LitRides</h1>
                    <p className="my-5 leading-loose">
                        A ride-sharing app built for university students. Real-time group chats, flexible daily bookings, and a one-day-one-ride model for affordable travel.
                    </p>
                    <Link className="underline text-white" to={'/projects'}>Learn More</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Hero