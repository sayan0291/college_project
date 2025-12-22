import { useEffect,useState } from "react";
import { NavLink } from "react-router-dom";
import Navview from "./Navview";

function Navbar(){
    const [open,setOpen] = useState(false)
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
      }, [open]);      
    
    return(
            <header className="flex justify-between items-center font-serif">
                <a className="relative px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 font-medium text-white group text-center">
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>

                    <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                    <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>

                    <span className="relative font-serif text-xs sm:text-sm md:text-base leading-tight">
                        Dr. Meghnad Saha <br />
                        Institute of Technology, Haldia
                    </span>
                </a>

                <Navview display="md:flex" />
                <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>☰</button>
                <ul className={`fixed top-0 left-0 z-50 h-screen w-64 bg-gray-900 text-white flex flex-col gap-6 p-6 pt-20 transition-transform duration-300 ease-in-out md:hidden ${open ? "translate-x-0" : "-translate-x-full"}`} onClick={() => setOpen(false)} role="menu" aria-hidden={!open}>
                <button className="absolute top-4 right-4 text-3xl" aria-label="Close menu" onClick={() => setOpen(false)}>✕</button>

                    <NavLink to="/home" onClick={() => setOpen(false)}>Home</NavLink>
                    <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
                    <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
                    <NavLink to="/notes" onClick={() => setOpen(false)}>Notes</NavLink>
                    <NavLink to="/login" onClick={() => setOpen(false)}>Login</NavLink>
                </ul>                
            </header>
      );
}

export default Navbar