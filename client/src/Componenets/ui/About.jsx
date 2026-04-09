import SectionHeading from "../ui/SectionHeading.jsx"

function About(){

    return(
            <div className={`font-serif fl-col page-padding`}>
              <div className="align-container">
                  <img className="w-full md:w-[70vh] image1" src="https://www.drmsithaldia.in/themes/images/carousel/banner2.jpg" alt="about-image"/>
                <div className="fl-col md:text-left gap-3" data-aos="fade-left">
                  <SectionHeading categories="About Us" />
                  <p className="text-adjust">
                  Dr. Meghnad Saha Institute of Technology was established in the year of 1998 with the aim to develop manpower in the field of Engineering & Technology to pace with the industrial growth of Haldia. The institute is well approved by AICTE. The academic programme & curriculum is affiliated & directly controlled by West Bengal State Council of Technical and Vocational Education and Skill Development (WBSCT&VE&SD).The institute is also under the direct administrative control of the Department of Technical Education & Training, Government of West Bengal. The institute upholds the standard of Technical Education by engaging qualified faculties & providing modern facilities. Dr. Meghnad Saha Institute of Technology is situated at City Centre, at the Heart of Haldia,in annexed to Haldia Municipality & Haldia Development Authority. It is in Haldia Sub-Division under Purba Medinipur District Authority of West Bengal. It is about 3 Km from Haldia Station & half Km. from nearest City Centre Bus stop.
                  </p>
                </div>
                </div>
                <div className="align-container">
                  <div className="fl-col md:text-left" data-aos="fade-right">
                    <SectionHeading categories="Achievement"/>
                    <p className="text-adjust">
                    So far the Institute has been well established as front line Diploma Engineering Institute in West Bengal. The Institute has a proven record of excellence in academic field. In the year 2007,it has received the overall Best Polytechnic Award. The passed-out students of Dr. Meghnad Saha Institute of Technology are well placed in various reputed industries not only at Haldia or West Bengal but also in different parts of India.
                    </p>
                  </div>
                  <img className="w-full md:w-1/3 image1 object-cover" src="https://hihshaldia.in/public/website/assets/images/backgrounds/mission.jpg" alt="achievement-image"/>
              </div>
            </div>
    )
}

export default About