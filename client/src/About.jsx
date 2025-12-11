function About(){
    return(
        <div className="text-center px-10 py-3 font-serif">
            <div className="relative w-fit mx-7 rounded-tl-md rounded-br-md gradient">
            <h2 className="text-white font-bold p-3 text-lg uppercase">
                About
            </h2>
            <span className="absolute -top-1 -right-1 flex">
                <span className="absolute inline-flex h-5 w-5 animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex h-5 w-5 rounded-full bg-sky-500"></span>
            </span>
            </div>

            <div className="flex px-8 gap-15 my-3">
            <img className="w-1/2 h-auto rounded-lg image1" src="https://www.drmsithaldia.in/themes/images/carousel/banner2.jpg" alt="about-image" />
            <div data-aos="fade-left">
                <h3 className="text-start text-2xl text-blue-900 font-bold">About US</h3>
                <hr className="bg-violet-500 rounded-lg h-1 my-1" />
                <p className="font-md text-blue-800 text-start">Dr. Meghnad Saha Institute of Technology was established in the year of 1998 with the aim to develop manpower in the field of Engineering & Technology to pace with the industrial growth of Haldia. The institute is well approved by AICTE. The academic programme & curriculum is affiliated & directly controlled by West Bengal State Council of Technical and Vocational Education and Skill Development (WBSCT&VE&SD).The institute is also under the direct administrative control of the Department of Technical Education & Training, Government of West Bengal. The institute upholds the standard of Technical Education by engaging qualified faculties & providing modern facilities. Dr. Meghnad Saha Institute of Technology is situated at City Centre, at the Heart of Haldia,in annexed to Haldia Municipality & Haldia Development Authority. It is in Haldia Sub-Division under Purba Medinipur District Authority of West Bengal. It is about 3 Km from Haldia Station & half Km. from nearest City Centre Bus stop.</p>
            </div>
            </div>
            <div className="flex px-8 gap-15 m-8">
            <div data-aos="fade-right">
                <h3 className="text-start text-2xl text-blue-900 font-bold">Our Achievement</h3>
                <hr className="bg-indigo-500 rounded-lg h-1 my-1" />
                <p className="font-md text-blue-800 text-start">So far the Institute has been well established as front line Diploma Engineering Institute in West Bengal. The Institute has a proven record of excellence in academic field. In the year 2007,it has received the overall Best Polytechnic Award. The passed-out students of Dr. Meghnad Saha Institute of Technology are well placed in various reputed industries not only at Haldia or West Bengal but also in different parts of India.</p>
            </div>
            <img className="w-2/5 h-auto rounded-lg image1" src="https://hihshaldia.in/public/website/assets/images/backgrounds/mission.jpg" alt="about-image" />
            </div>
        </div>
    )
}

export default About