import { NavLink } from "react-router-dom"

function Navbar(){

    const baseStyle = "px-5 py-2.5 font-medium rounded-lg text-sm";

    const activeStyle = "bg-blue-600 text-white";

    const inactiveStyle = "bg-blue-50 text-blue-500 hover:bg-blue-100 hover:text-blue-600";

    
    return(
            <header className="flex justify-between items-center">
                <a className="relative px-6 py-3 font-medium text-white group">
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>

                    <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                    <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                    <span className="relative text-xm font-serif">Dr. Meghnad Saha <br/>Institute of Technology, Haldia</span>
                </a>
                <nav className="flex list-none gap-6 text-lg font-normal">
                    <NavLink to="/home" className={({isActive}) => `${baseStyle} ${isActive ? activeStyle:inactiveStyle}`}>Home</NavLink>
                    <NavLink to="/about" className={({isActive}) => `${baseStyle} ${isActive ? activeStyle:inactiveStyle}`}>About</NavLink>
                    <NavLink to="/contact" className={({isActive}) => `${baseStyle} ${isActive ? activeStyle:inactiveStyle}`}>Contact</NavLink>
                    <NavLink to="/notes" className={({isActive}) => `${baseStyle} ${isActive ? activeStyle:inactiveStyle}`}>Notes</NavLink>
                    <NavLink to="/login" className={({isActive}) => `${baseStyle} ${isActive ? activeStyle:inactiveStyle}`}>Login</NavLink>
                </nav>
            </header>
      );
}

export default Navbar