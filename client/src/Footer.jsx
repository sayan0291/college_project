import footerimage from './assets/footerimage.png'
import { FaFacebook, FaYoutube , FaTwitter , FaPhone } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { MdEmail } from "react-icons/md";
import Home, {textalign} from './Home';
import Contact,{maplink} from './Contact';


function Footer(){
    const contactsection = "flex items-center gap-3"
    const iconsection = "p-3 border rounded-4xl bg-white hover:bg-yellow-50"
    const iconhover = "text-blue-900 text-xm hover:text-green-700 transition-transform duration-300 hover:scale-150"
    const texthover = "font-bold text-blue-100 hover:text-gray-50 cursor-pointer"
    
    const icons = [
        {icon: <FaFacebook />,link: "https://www.facebook.com/www.drmsithaldia.org/",design: "text-gray-100 hover:text-white transition"},
        {icon: <FaYoutube />,link: "https://www.youtube.com/",design: "text-red-600 hover:text-red-700 transition"},
        {icon: <FaTwitter />,link: "https://x.com/",design: "text-blue-500 hover:text-blue-600 transition"}
    ]

    return(
        <footer className='font-serif'>
            <div className='flex justify-between pt-5 px-8'>
                <div>
                    <img className="h-20 px-3" src={footerimage} alt="footer-image" />
                </div>
                <div className={textalign} style={{gap: "8px"}}>
                    <h2 className='text-start text-blue-50 text-xl font-bold pb-4'>Contact</h2>
                    <div className={contactsection}>
                        <div className={iconsection}>
                            <FaPhone className={iconhover} />
                        </div>
                        <a className={`${texthover} font-sans`} href="tel:03224-253064" target="_blank" rel="noopener noreferrer">&nbsp;03224-253064</a>
                    </div>
                    <div className={contactsection}>
                        <div className={iconsection}>
                            <FaLocationDot className={iconhover} />
                        </div>
                        <a className={texthover} href={maplink} target="_blank" rel="noopener noreferrer">&nbsp;Debhog,Haldia Pin-721657,<br/>Purba Medinipur,WB,India</a>
                    </div>
                    <div className={contactsection}>
                        <div className={iconsection}>
                            <MdEmail className={iconhover} />
                        </div>
                        <a className={texthover} href="tel:" target="_blank" rel="noopener noreferrer">&nbsp;drmsithaldia.tpc@gmail.com</a>
                    </div>
                </div>
                <div className='flex text-4xl rounded p-5 gap-5 '>
                    {icons.map( (obj,index) => (<a key={index} href={obj.link} target='_blank' rel='noopener noreferrer' className={obj.design}>{obj.icon}</a>))}
                </div>
            </div>
            <hr className='h-1 mt-8 bg-white' />
            <p className='mt-5 text-center text-white'>&copy; 2025 Dr. Meghnad Saha Institute of Technology, Haldia. Allrights Reserved.</p>
        </footer>
    )
}

export default Footer