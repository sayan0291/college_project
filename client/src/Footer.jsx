import footerimage from './assets/footerimage.png'
import { FaFacebook, FaYoutube , FaTwitter , FaPhone } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { MdEmail } from "react-icons/md";


function Footer(){

    const icons = [
        {icon: <FaFacebook />,link: "https://www.facebook.com/www.drmsithaldia.org/",design: "text-blue-600 hover:text-blue-700 transition"},
        {icon: <FaYoutube />,link: "https://www.youtube.com/",design: "text-red-600 hover:text-red-700 transition"},
        {icon: <FaTwitter />,link: "https://x.com/",design: "text-blue-500 hover:text-blue-600 transition"}
    ]

    return(
        <footer className='text-center font-inter'>
            <div className='flex gap-20 py-7 px-8'>
            <div>
                <img className="h-20 rounded-md px-3 bg-gray-200" src={footerimage} alt="footer-image" />
                <div className='flex text-2xl rounded p-5 gap-5 '>
                    {icons.map( (obj,index) => (<a key={index} href={obj.link} target='_blank' rel='noopener noreferrer' className={obj.design}>{obj.icon}</a>))}
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <h2 className='text-start text-blue-50 text-2xl font-bold'>Contact</h2>
                <div className='flex items-center gap-3' data-aos="fade-left">
                    <div className='p-3 border rounded-4xl bg-white hover:bg-yellow-50'>
                        <FaPhone className="text-blue-900 text-xl rotate-105 hover:text-green-700 transition-transform duration-300 hover:scale-130" />
                    </div>
                    <a className="font-bold text-blue-100 hover:text-gray-50 cursor-pointer" href="tel:" target="_blank" rel="noopener noreferrer">&nbsp;03224-253064</a>
                </div>
                <div className='flex items-center gap-3' data-aos="fade-left">
                    <div className='p-3 border rounded-4xl bg-white hover:bg-yellow-50'>
                        <FaLocationDot className="text-blue-900 text-xl hover:text-green-700 transition-transform duration-300 hover:scale-130" />
                    </div>
                    <a className="font-bold text-sm text-blue-100 hover:text-gray-50 cursor-pointer" href="tel:" target="_blank" rel="noopener noreferrer">&nbsp;Debhog,Haldia Pin-721657,Purba Medinipur,WB,India</a>
                </div>
                <div className='flex items-center gap-3' data-aos="fade-left">
                    <div className='p-3 border rounded-4xl bg-white hover:bg-yellow-50'>
                        <MdEmail className="text-blue-900 text-xl hover:text-green-700 transition-transform duration-300 hover:scale-130" />
                    </div>
                    <a className="font-bold text-blue-100 hover:text-gray-50 cursor-pointer" href="tel:" target="_blank" rel="noopener noreferrer">&nbsp;drmsithaldia.tpc@gmail.com</a>
                </div>
            </div>
            </div>
            <hr className='h-1 mt-8 bg-white' />
            <p className='my-5 text-white'>&copy; 2025 Dr. Meghnad Saha Institute of Technology, Haldia. Allrights Reserved.</p>
        </footer>
    )
}

export default Footer