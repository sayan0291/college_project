import { NavLink } from "react-router-dom"


export default function Navview(props){
    const baseStyle = "px-5 py-2.5 md:px-4 md:py-2 font-medium rounded-lg text-sm";

    const activeStyle = "bg-violet-600 text-white";

    const inactiveStyle = "bg-blue-100 text-blue-500 hover:bg-blue-200 hover:text-blue-600";

    return(
        <nav className={`hidden ${props.display} lg:gap-6 md:gap-2`}>
            <NavLink to="/home" className={({isActive}) => `${baseStyle} ${isActive ? activeStyle:inactiveStyle}`}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => `${baseStyle} ${isActive ? activeStyle:inactiveStyle}`}>About</NavLink>
            <NavLink to="/contact" className={({isActive}) => `${baseStyle} ${isActive ? activeStyle:inactiveStyle}`}>Contact</NavLink>
            <NavLink to="/notes" className={({isActive}) => `${baseStyle} ${isActive ? activeStyle:inactiveStyle}`}>Notes</NavLink>
            <NavLink to="/login" className={({isActive}) => `${baseStyle} ${isActive ? activeStyle:inactiveStyle}`}>Login</NavLink>
        </nav>
    )
}