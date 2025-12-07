import HomeImage1 from './assets/meghnad_saha.jpg'
import HomeImage2 from './assets/meghnad_saha_statue.jpg'
import HomeImage3 from './assets/right_10023784.png'

function Home(){
    return(
        <div className='homepage font-serif'>
            <div className='flex justify-center gap-15 size'>
            <img src={HomeImage1} className="w-1/2 h-auto rounded-md image1" alt="MSIT-image1" />
            <div className='flex flex-col text-start' data-aos="fade-left">
                <h2 className='text-3xl text-violet-900 underline underline-offset-10'>DR. Meghnad Saha Instite of Technology</h2>
                <p className='text-lg text-blue-800 my-4'>Dr. Meghnad Saha Institute of Technology was established in the year of 1998 with the aim to develop manpower in the field of Engineering & Technology to pace with the industrial growth of Haldia. The institute is well approved by AICTE. The academic programme & curriculum is affiliated & directly controlled by West Bengal State Council of Technical and Vocational Education and Skill Development (WBSCT&VE&SD).The institute is also under the direct administrative control of the Department of Technical Education & Training, Government of West Bengal. The institute upholds the standard of Technical Education by engaging qualified faculties & providing modern laboratory facilities.</p>
            </div>
            </div>
            <div className='flex justify-center gap-5 size'>
            <div className='flex flex-col text-start'>
                <h2 className='text-3xl text-violet-900 underline underline-offset-10' data-aos="fade-right">DR. Meghnad Saha</h2><p className='m-1 font-bold' data-aos="fade-left">(6th Oct,1893 - 16Feb,1956)</p>
                <p className='text-lg text-blue-700 my-2' data-aos="fade-right">Dr. Meghnad Saha was a pioneering Indian astrophysicist whose groundbreaking Saha Ionization Equation transformed our understanding of stars and their spectra. A visionary scientist and nation-builder, he combined deep theoretical insight with a passion for scientific progress in India. His work laid the foundation for modern astrophysics and continues to inspire researchers around the world. Dr. Saha’s legacy shines brightly—much like the stars he devoted his life to understanding.</p>
            </div>
            <img src={HomeImage2} className="object-fit rounded-md image1" alt="MSIT-image1" />
            </div>
            <div className='flex px-3'>
                <img className='w-2/4 rounded-md image1' src="https://hihshaldia.in/public/website/assets/images/backgrounds/vision.jpg" alt="vision" />
                <div className='m-5 text-start text-blue-800'>
                    <h2 className='font-bold text-sky-900 mx-5 text-2xl' data-aos="fade-right">Our Vision</h2>
                    <div className='flex p-2' data-aos="fade-left">
                        <img className='w-1/10' src={HomeImage3} alt="right" />
                        <p className='p-3'>To deliver industry-relevant technical education that transforms students into skilled professionals ready for tomorrow's challenges.</p>
                    </div>
                    <div className='flex p-2' data-aos="fade-left">
                        <img className='w-1/10' src={HomeImage3} alt="right" />
                        <p className='p-3'>To cultivate innovation throughh ands-onlearning experiences that bridge theoretical knowledge with practical applications.
                        </p>
                    </div>
                    <div className='flex p-2' data-aos="fade-left">
                        <img className='w-1/10' src={HomeImage3} alt="right" />
                        <p className='p-3'>To instill ethical leadership values alongside technical expertise, preparing graduates who positively impact society.</p>
                    </div>
                    <div className='flex p-2' data-aos="fade-left">
                        <img className='w-1/10' src={HomeImage3} alt="right" />
                        <p className='p-3'>To establish meaningful industry partnerships that enhance learning and employment outcomes.</p>
                    </div>
                    <div className='flex p-2' data-aos="fade-left">
                        <img className='w-1/10' src={HomeImage3} alt="right" />
                        <p className='p-3'>To empower students with relevant knowledge and values that drive regional technological advancement.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home