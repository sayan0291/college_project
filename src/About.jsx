function About(){
    return(
        <div className="text-center px-10 m-5">
            <h2 className="text-violet-700 font-serif font-bold bg-gray-200 p-2 rounded-lg m-5 text-3xl ">About</h2>
            <div className="flex px-8 gap-15">
            <img className="w-1/2 h-auto rounded-lg image1" src="https://www.drmsithaldia.in/themes/images/carousel/banner2.jpg" alt="about-image " />
            <div>
                <h3 className="text-start text-2xl text-blue-900 font-serif font-bold">About US</h3>
                <hr className="bg-red-300 rounded-lg h-1 my-1" />
                <p className="font-serif font-md text-blue-800 text-start">Dr. Meghnad Saha Institute of Technology was established in the year of 1998 with the aim to develop manpower in the field of Engineering & Technology to pace with the industrial growth of Haldia. The institute is well approved by AICTE. The academic programme & curriculum is affiliated & directly controlled by West Bengal State Council of Technical and Vocational Education and Skill Development (WBSCT&VE&SD).The institute is also under the direct administrative control of the Department of Technical Education & Training, Government of West Bengal. The institute upholds the standard of Technical Education by engaging qualified faculties & providing modern facilities. Dr. Meghnad Saha Institute of Technology is situated at City Centre, at the Heart of Haldia,in annexed to Haldia Municipality & Haldia Development Authority. It is in Haldia Sub-Division under Purba Medinipur District Authority of West Bengal. It is about 3 Km from Haldia Station & half Km. from nearest City Centre Bus stop.</p>
            </div>
            </div>
        </div>
    )
}

export default About