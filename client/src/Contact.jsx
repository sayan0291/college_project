import website from "./assets/localization.png"
import phone from "./assets/telephone.png"
import email from "./assets/mail.png"
import location from "./assets/location.jpg"
import SectionHeading from "./SectionHeading"
export const maplink = "https://www.google.com/maps/place/Dr.+Meghnad+Saha+Institute+of+Technology/@22.0586655,88.0716765,18.03z/data=!4m14!1m7!3m6!1s0x3a02f0bf99586ab5:0xd5387a955bf623d9!2sDr.+Meghnad+Saha+Institute+of+Technology!8m2!3d22.0589577!4d88.0726341!16s%2Fg%2F11g8xk0mzn!3m5!1s0x3a02f0bf99586ab5:0xd5387a955bf623d9!8m2!3d22.0589577!4d88.0726341!16s%2Fg%2F11g8xk0mzn?hl=en-IN&entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
export const linkstyle = "font-bold text-blue-400 hover:text-blue-500 cursor-pointer"
export const imagestyle = "rounded mr-4 transition-transform duration-500 hover:scale-x-[-1]"



function Contact(){

    const link = "https://www.drmsithaldia.in/"
    return(
        <div className="px-10 py-5 w-full">
                <SectionHeading categories="CONTACT" />
                <img className="px-45 my-5 rounded-md" src="https://www.drmsithaldia.in/themes/images/carousel/banner6.jpg" alt="whole-campus" />
                <div className="flex flex-col justify-center w-full pl-100">
                        <div className="align-section" data-aos="fade-left">
                            <img className={`${imagestyle} w-1/17 rounded-xl`} src={location} alt="website-icon" />
                            <a className={linkstyle} href={maplink} target="_blank" rel="noopener noreferrer">&nbsp;Debhog,Haldia Pin-721657,Purba Medinipur,WB,India</a>
                        </div>
                        <div className="align-section" data-aos="fade-left">
                            <img className={`${imagestyle} w-15`} src={website} alt="website-icon" />
                            <a className={linkstyle} href={link} target="_blank" rel="noopener noreferrer">&nbsp;www.drmsithaldia.in</a>
                        </div>
                        <div className="align-section" data-aos="fade-left">
                            <img className={`${imagestyle} w-18`} src={phone} alt="website-icon" />
                            <a className="font-bold text-blue-400 hover:text-blue-500 cursor-pointer" href="tel:" target="_blank" rel="noopener noreferrer">&nbsp;03224-253064</a>
                        </div>
                        <div className="align-section" data-aos="fade-left">
                            <img className={`${imagestyle} w-18`} src={email} alt="website-icon" />
                            <a className={linkstyle} href="mailto:drmsithaldia@yahoo.com" target="_blank" rel="noopener noreferrer">&nbsp;drmsithaldia@yahoo.com</a>
                        </div>
                        <div className="align-section" data-aos="fade-left">
                            <img className={`${imagestyle} w-18`} src={email} alt="website-icon" />
                            <a className={linkstyle} href="mailto:drmsithaldia.tpc@gmail.com" target="_blank" rel="noopener noreferrer">&nbsp;drmsithaldia.tpc@gmail.com</a>
                        </div>
                    </div>
        </div>
    )
}

export default Contact