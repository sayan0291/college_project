import { linkstyle,imagestyle,maplink } from "./styles"
import SectionHeading from "./SectionHeading"
import website from "./assets/localization.png"
import phone from "./assets/telephone.png"
import email from "./assets/mail.png"
import location from "./assets/location.jpg"




function Contact(){

    const link = "https://www.drmsithaldia.in/"
    return(
        <div className="px-10 py-5 w-full">
                <img className="px-45 my-5 rounded-md" src="https://www.drmsithaldia.in/themes/images/carousel/banner6.jpg" alt="whole-campus" />
                <div className="flex flex-col justify-center w-full pl-100">
                        <SectionHeading categories="Contact US" color="bg-[linear-gradient(to_right,rgb(16,1,74)_0%,rgb(240,248,255)_50%)]" textcolor="text-white"/>
                        <div className="align-section" data-aos="fade-left">
                            <img className={`${imagestyle} w-1/20 rounded-xl`} src={location} alt="website-icon" />
                            <a className={linkstyle} href={maplink} target="_blank" rel="noopener noreferrer">&nbsp;Debhog,Haldia Pin-721657,Purba Medinipur,WB,India</a>
                        </div>
                        <div className="align-section" data-aos="fade-left">
                            <img className={`${imagestyle} w-1/20`} src={website} alt="website-icon" />
                            <a className={linkstyle} href={link} target="_blank" rel="noopener noreferrer">&nbsp;www.drmsithaldia.in</a>
                        </div>
                        <div className="align-section" data-aos="fade-left">
                            <img className={`${imagestyle} w-1/20`} src={phone} alt="website-icon" />
                            <a className="font-bold text-blue-400 hover:text-blue-500 cursor-pointer" href="tel:" target="_blank" rel="noopener noreferrer">&nbsp;03224-253064</a>
                        </div>
                        <div className="align-section" data-aos="fade-left">
                            <img className={`${imagestyle} w-1/20`} src={email} alt="website-icon" />
                            <a className={linkstyle} href="mailto:drmsithaldia@yahoo.com" target="_blank" rel="noopener noreferrer">&nbsp;drmsithaldia@yahoo.com</a>
                        </div>
                        <div className="align-section" data-aos="fade-left">
                            <img className={`${imagestyle} w-1/20`} src={email} alt="website-icon" />
                            <a className={linkstyle} href="mailto:drmsithaldia.tpc@gmail.com" target="_blank" rel="noopener noreferrer">&nbsp;drmsithaldia.tpc@gmail.com</a>
                        </div>
                    </div>
        </div>
    )
}

export default Contact