import { NavLink } from "react-router";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const activeNav = ({ isActive }: { isActive: boolean }) => isActive 
    ? 'text-white font-bold py-2 border-b border-b-green-600 transition' 
    : 'text-white transition hover:text-green-600'

  return (
    <nav className="flex flex-col items-center justify-center relative">
        <div className="flex items-center justify-center fixed top-3 z-30 left-0 right-0 mb-2">
            <div className="flex w-[80%] items-center justify-between bg-white/8 backdrop-blur-xl py-3 px-4 my-3 rounded-lg">
                <NavLink to={'/'}>
                    <h1 className="text-green-600 font-black text-3xl">DevWorld</h1>
                </NavLink>

                <ul className="hidden md:flex space-x-5">
                    <li><NavLink to={'/'} className={activeNav}>Home</NavLink></li>
                    <li><NavLink to={'/about'} className={activeNav}>About</NavLink></li>
                    <li><NavLink to={'/projects'} className={activeNav}>Projects</NavLink></li>
                    <li><NavLink to={'/blogs'} className={activeNav}>Blog</NavLink></li>
                    <li><NavLink to={'/contact'} className={activeNav}>Contact</NavLink></li>
                </ul>

                <button 
                className="text-gray-300 md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen? <FaTimes/> : <FaBars/>}
                </button>
            </div>

            {menuOpen && (
                <div className="absolute top-20 bg-gray-900 w-[80%] p-5">
                    <ul className="flex flex-col space-y-5 md:hidden">
                        <li><NavLink to={'/'} className={activeNav} onClick={() => setMenuOpen(false)}>Home</NavLink></li>
                        <li><NavLink to={'/about'} className={activeNav} onClick={() => setMenuOpen(false)}>About</NavLink></li>
                        <li><NavLink to={'/projects'} className={activeNav} onClick={() => setMenuOpen(false)}>Projects</NavLink></li>
                        <li><NavLink to={'/blogs'} className={activeNav} onClick={() => setMenuOpen(false)}>Blog</NavLink></li>
                        <li><NavLink to={'/contact'} className={activeNav} onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
                    </ul>
            </div>
            )}

        </div>
    </nav>
  )
}
export default Navbar