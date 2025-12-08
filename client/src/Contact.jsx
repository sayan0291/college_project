import website from "./assets/localization.png"
import phone from "./assets/telephone.png"
import email from "./assets/mail.png"

function Contact(){

    const link = "https://www.drmsithaldia.in/"
    return(
        <div className="px-10 py-5 w-full">
            <div className="relative w-fit mx-7 px-35 rounded-tl-md rounded-br-md bg-gray-400">
                <h2 className="text-white font-bold p-3">
                    Contact
                </h2>
                <span className="absolute -top-1 -right-1 flex">
                    <span className="absolute inline-flex h-5 w-5 animate-ping rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex h-5 w-5 rounded-full bg-sky-500"></span>
                </span>
            </div>
                <img className="px-45 my-5 rounded-md" src="https://www.drmsithaldia.in/themes/images/carousel/banner6.jpg" alt="whole-campus" />
            <div className="centerize">
                <div className="align-section" data-aos="fade-left">
                    <img className="w-1/14" src={website} alt="website-icon" />
                    <a className="font-bold text-blue-400 hover:text-blue-500 cursor-pointer" href={link} target="_blank" rel="noopener noreferrer">&nbsp;www.drmsithaldia.in</a>
                </div>
                <div className="align-section" data-aos="fade-left">
                    <img className="w-1/14" src={phone} alt="website-icon" />
                    <a className="font-bold text-blue-400 hover:text-blue-500 cursor-pointer" href={link} target="_blank" rel="noopener noreferrer">&nbsp;03224-253064</a>
                </div>
                <div className="align-section" data-aos="fade-left">
                    <img className="w-1/14" src={email} alt="website-icon" />
                    <a className="font-bold text-blue-400 hover:text-blue-500 cursor-pointer" href={link} target="_blank" rel="noopener noreferrer">&nbsp;drmsithaldia@yahoo.com</a>
                </div>
                <div className="align-section" data-aos="fade-left">
                    <img className="w-1/14" src={email} alt="website-icon" />
                    <a className="font-bold text-blue-400 hover:text-blue-500 cursor-pointer" href={link} target="_blank" rel="noopener noreferrer">&nbsp;drmsithaldia.tpc@gmail.com</a>
                </div>
            </div>
            
        </div>
    )
}

export default Contact