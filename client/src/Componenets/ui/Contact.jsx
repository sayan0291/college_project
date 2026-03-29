import { linkstyle,imagestyle } from "../styles.jsx"
import SectionHeading from "../ui/SectionHeading.jsx"
import website from "../../assets/localization.png"
import phone from "../../assets/telephone.png"
import email from "../../assets/mail.png"
import location from "../../assets/location.jpg"




function Contact(){

    const contactcontent = [
        {name:"location",images:`${location}`,link:"https://www.google.com/maps/place/Dr.+Meghnad+Saha+Institute+of+Technology/@22.0586655,88.0716765,18.03z/data=!4m14!1m7!3m6!1s0x3a02f0bf99586ab5:0xd5387a955bf623d9!2sDr.+Meghnad+Saha+Institute+of+Technology!8m2!3d22.0589577!4d88.0726341!16s%2Fg%2F11g8xk0mzn!3m5!1s0x3a02f0bf99586ab5:0xd5387a955bf623d9!8m2!3d22.0589577!4d88.0726341!16s%2Fg%2F11g8xk0mzn?hl=en-IN&entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",text:"Debhog,Haldia Pin-721657,Purba Medinipur,WB,India"},
        {name:"website",images:`${website}`,link:"https://www.drmsithaldia.in/",text:"www.drmsithaldia.in"},
        {name:"phone",images:`${phone}`,link:"https://www.drmsithaldia.in/",text:"03224-253064"},
        {name:"email",images:`${email}`,link:"https://www.drmsithaldia.in/",text:"drmsithaldia@yahoo.com"},
        {name:"email",images:`${email}`,link:"https://www.drmsithaldia.in/",text:"drmsithaldia.tpc@gmail.com"},
    ]

    return(
        <div className="px-10 py-5 w-full">
                <img className="md:px-45 my-5 rounded-md" src="https://www.drmsithaldia.in/themes/images/carousel/banner6.jpg" alt="whole-campus" />
                <div className="flex flex-col justify-center px-0 md:px-45">
                        <SectionHeading categories="Contact US" />
                        {contactcontent.map((Obj,index) => (
                            <div key={index} className="align-section m-1 md:m-2" data-aos="fade-left">
                                <img className={`${imagestyle} w-1/14 md:w-1/20`} src={Obj.images} alt="website-icon" />
                                <a className={linkstyle} href={Obj.link} target="_blank" rel="noopener noreferrer">&nbsp;{Obj.text}</a>
                            </div>
                        ))}
                    </div>
        </div>
    )
}

export default Contact