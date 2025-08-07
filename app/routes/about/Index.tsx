import LeftColumnAbout from "~/components/LeftColumnAbout";
import RightColumnAbout from "~/components/RightColumnAbout";

const AboutPage = () => {
  return (
    <div className="mt-32 flex flex-col items-center justify-center w-full my-7">
      <h1 className="text-center font-black text-3xl text-white mb-4">About Me 👋</h1>
      <div className="flex items-center flex-col justify-center md:flex-row md:justify-evenly w-[80%] gap-4">
        {/* LEFT COLUMN */}
        <LeftColumnAbout homePage={false}/>
        {/* MIDDLE COLUMN */}
        <div className="w-full p-4 flex items-center justify-center">
          <img 
          src="../public/images/profile.jpg" 
          alt=""
          className="size-70 object-cover object-top rounded-full border-4 border-green-600"
           />
        </div>
        {/* RIGHT COLUMN */}
        <RightColumnAbout/>
      </div>
      
    </div>
  )
}
export default AboutPage