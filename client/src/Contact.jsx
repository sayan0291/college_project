function Contact(){

    const link = "https://www.drmsithaldia.in/"
    return(
        <div className="text-center px-10 py-5">
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
            <div data-aos="fade-left">
                <h2 className='text-2xl text-violet-900 underline underline-offset-10 font-serif'>DR. Meghnad Saha Instite of Technology</h2>
                <h3 className="flex justify-center font-bold my-1 text-blue-900 font-serif ">P.O. :<p className="font-bold text-blue-400">&nbsp; Debhog, Haldia</p></h3>
                <h3 className="flex justify-center font-bold my-1 text-blue-900 font-serif ">DIST :<p className="font-bold text-blue-400">&nbsp; Purba Medinipur</p></h3>
                <h3 className="flex justify-center font-bold my-1 text-blue-900 font-serif ">Pin :<p className="font-bold text-blue-400">&nbsp; 721657, WB, INDIA.</p></h3>
                <h3 className="flex justify-center font-bold my-1 text-blue-900 font-serif ">Phone & Fax :<p className="font-bold text-blue-400 font-sans">&nbsp; 03224-253064</p></h3>
                <h3 className="flex justify-center font-bold my-1 text-blue-900 font-serif">Email :<p className="font-bold text-blue-400">&nbsp;drmsithaldia@yahoo.com,drmsithaldia.tpc@gmail.com</p></h3>
                <h3 className="flex justify-center font-bold my-1 text-blue-900 font-serif">WEBSITE :<a className="font-bold text-blue-400 hover:text-blue-500 cursor-pointer" href={link} target="_blank"
                        rel="noopener noreferrer">&nbsp;www.drmsithaldia.in</a></h3>
            </div>
        </div>
    )
}

export default Contact