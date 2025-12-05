import HomeImage1 from './assets/meghnad_saha.jpg'
import HomeImage2 from './assets/meghnad_saha_statue.jpg'

function Home(){
    return(
        <div className='homepage'>
            <div className='flex justify-center gap-15 size'>
            <img src={HomeImage1} className="w-1/2 h-auto rounded-md image1" alt="MSIT-image1" />
            <div className='flex flex-col text-start' data-aos="fade-left">
                <h2 className='text-3xl text-violet-900 underline underline-offset-10 font-serif'>DR. Meghnad Saha Instite of Technology</h2>
                <p className='font-serif text-lg text-blue-800 my-4'>Dr. Meghnad Saha Institute of Technology was established in the year of 1998 with the aim to develop manpower in the field of Engineering & Technology to pace with the industrial growth of Haldia. The institute is well approved by AICTE. The academic programme & curriculum is affiliated & directly controlled by West Bengal State Council of Technical and Vocational Education and Skill Development (WBSCT&VE&SD).The institute is also under the direct administrative control of the Department of Technical Education & Training, Government of West Bengal. The institute upholds the standard of Technical Education by engaging qualified faculties & providing modern laboratory facilities.</p>
            </div>
            </div>
            <div className='flex justify-center gap-5 size'>
            <div className='flex flex-col text-start' data-aos="fade-right">
                <h2 className='text-3xl text-violet-900 underline underline-offset-10 font-serif'>DR. Meghnad Saha</h2><p className='m-1 font-bold'>(6th Oct,1893 - 16Feb,1956)</p>
                <p className='font-serif text-lg text-blue-700 my-2'>Dr. Meghnad Saha was a pioneering Indian astrophysicist whose groundbreaking Saha Ionization Equation transformed our understanding of stars and their spectra. A visionary scientist and nation-builder, he combined deep theoretical insight with a passion for scientific progress in India. His work laid the foundation for modern astrophysics and continues to inspire researchers around the world. Dr. Saha’s legacy shines brightly—much like the stars he devoted his life to understanding.</p>
            </div>
            <img src={HomeImage2} className="object-fit rounded-md image1" alt="MSIT-image1" />
            </div>
        </div>
    )
}

export default Home