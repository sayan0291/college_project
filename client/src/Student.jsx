import Admin,{ h2style,inputstyle,buttonstyle } from "./Admin"
import { Link } from "react-router-dom"

function Student(){
    return(
        <div className="w-full py-10 flex justify-center font-serif">
            <div className="px-10 bg-blue-100 rounded-2xl flex flex-col gap-5 py-5 w-1/3 shadow">
                <h2 className="text-center font-bold" style={h2style}>Student Login</h2>
                <form action="submit" className="flex flex-col items-center gap-5">
<<<<<<< HEAD
                    <input className="placeholder:text-gray-500 text-blue-800 focus:outline focus:outline-violet-500" type="text" style={inputstyle} placeholder="Enter Your Registration N0" />
                    <input className="placeholder:text-gray-500 text-blue-800 focus:outline focus:outline-violet-500" type="text" style={inputstyle} placeholder="Enter Mobile No" />
                    <button className="bg-[#212edf] hover:bg-purple-600 duration-500" style={buttonstyle}>Enter</button>
=======
                    <input type="text" style={inputstyle} placeholder="Enter Your Registration N0" />
                    <input type="text" style={inputstyle} placeholder="Enter Mobile No" />
                    <button className="bg-[#6495ED] hover:bg-blue-600" style={buttonstyle}>Log IN</button>
                    <div className="flex"><p>Have an Account ?</p><Link to='/studentregistration' className="font-bold text-blue-500 hover:text-blue-600">&nbsp;Sign UP</Link></div>
>>>>>>> 4693a8132ddb48628f113c0a8a51d9d4b3c47efe
                </form>
            </div>
        </div>
    )
}

export default Student