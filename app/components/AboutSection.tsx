import LeftColumnAbout  from './LeftColumnAbout' 

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full my-5">
        <div className="flex items-center-justify-between w-[80%]">
            <div className=" w-full md:w-[50%]">
                <LeftColumnAbout homePage={true}/>
            </div>

            <img 
            src="/welcome-image.png" 
            alt=""
            className="w-[50%] h-[400px] object-contain hidden md:block"
             />
        </div>
    </div>
  )
}
export default AboutSection