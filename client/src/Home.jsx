import HomeImage1 from './assets/meghnad_saha.jpg'
import HomeImage2 from './assets/meghnad_saha_statue.jpg'
import HomeImage3 from './assets/right_10023784.png'
import { aligncontainer,textalign,pstyle } from './styles'
import SectionHeading from './SectionHeading'


function Home(){
    const alignright = "align-section p-2 gap-3"

    return(
        <div className='homepage font-serif'>
            <div className={aligncontainer} style={{height: "70vh",padding: "1rem"}}>
            <img src={HomeImage1} className="w-1/2 image1" alt="MSIT Campus Image" />
            <div className={textalign} data-aos="fade-left">
                <SectionHeading categories="DR. Meghnad Saha Instite of Technology" color="bg-[linear-gradient(to_right,rgb(247,30,255)_0%,rgb(240,248,255)_90%)]" textcolor="text-blue-900"/>
                <p className={pstyle} style={{marginTop: "6px"}}>Dr. Meghnad Saha Institute of Technology was established in the year of 1998 with the aim to develop manpower in the field of Engineering & Technology to pace with the industrial growth of Haldia. The institute is well approved by AICTE. The academic programme & curriculum is affiliated & directly controlled by West Bengal State Council of Technical and Vocational Education and Skill Development (WBSCT&VE&SD).The institute is also under the direct administrative control of the Department of Technical Education & Training, Government of West Bengal. The institute upholds the standard of Technical Education by engaging qualified faculties & providing modern laboratory facilities.</p>
            </div>
            </div>
            <div className={aligncontainer} style={{height: "70vh",padding: "1rem"}}>
            <div className={textalign}>
                <SectionHeading categories="Dr. Meghnad Saha" color="bg-[linear-gradient(to_right,rgb(255,82,82)_0%,rgb(240,248,255)_80%)]" textcolor="text-white"/>
                <p className='m-1 font-bold' data-aos="fade-right">(6th Oct,1893 - 16Feb,1956)</p>
                <p className={pstyle} data-aos="fade-right">Dr. Meghnad Saha was a pioneering Indian astrophysicist whose groundbreaking Saha Ionization Equation transformed our understanding of stars and their spectra. A visionary scientist and nation-builder, he combined deep theoretical insight with a passion for scientific progress in India. His work laid the foundation for modern astrophysics and continues to inspire researchers around the world. Dr. Saha’s legacy shines brightly—much like the stars he devoted his life to understanding.</p>
            </div>
            <img src={HomeImage2} className="image1" alt="Dr. Meghnad Saha Image" />
            </div>
            <div className='flex gap-5'>
                <img className='w-[80vh] image1' src="https://hihshaldia.in/public/website/assets/images/backgrounds/vision.jpg" alt="vision-image"/>
                <div>
                    <SectionHeading categories="Our Vision" color="bg-[linear-gradient(to_right,rgb(24,162,70)_0%,rgb(240,248,255)_90%)]" textcolor="text-blue-900"/>
                    <div className={alignright} data-aos="fade-left">
                        <img className='w-1/15' src={HomeImage3} alt="right" />
                        <p className={pstyle}>To deliver industry-relevant technical education that transforms students into skilled professionals ready for tomorrow's challenges.</p>
                    </div>
                    <div className={alignright} data-aos="fade-left">
                        <img className='w-1/15' src={HomeImage3} alt="right" />
                        <p className={pstyle}>To cultivate innovation throughh ands-onlearning experiences that bridge theoretical knowledge with practical applications.</p>
                    </div>
                    <div className={alignright} data-aos="fade-left">
                        <img className='w-1/15' src={HomeImage3} alt="right" />
                        <p className={pstyle}>To instill ethical leadership values alongside technical expertise, preparing graduates who positively impact society.</p>
                    </div>
                    <div className={alignright} data-aos="fade-left">
                        <img className='w-1/15' src={HomeImage3} alt="right" />
                        <p className={pstyle}>To establish meaningful industry partnerships that enhance learning and employment outcomes.</p>
                    </div>
                    <div className={alignright} data-aos="fade-left">
                        <img className='w-1/15' src={HomeImage3} alt="right" />
                        <p className={pstyle}>To empower students with relevant knowledge and values that drive regional technological advancement.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home