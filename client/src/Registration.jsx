import { Link } from "react-router-dom"
import Admin,{ h2style,inputstyle,buttonstyle } from "./Admin"

function Registration(){
    return(
        <div className="w-full py-10 flex justify-center font-serif">
            <div className="px-10 bg-blue-100 rounded-2xl flex flex-col gap-5 py-5 w-1/3 shadow">
                <h2 className="text-center font-bold" style={h2style}>Sign UP</h2>
                <form action="submit" className="flex flex-col items-center gap-5">
                    <input className="placeholder:text-gray-500 text-blue-800 focus:outline focus:outline-violet-500 " type="text" style={inputstyle} placeholder="Enter Your Email" />
                    <input className="placeholder:text-gray-500 text-blue-800 focus:outline focus:outline-violet-500" type="password" style={inputstyle} placeholder="Enter Password" />
                    <input className="placeholder:text-gray-500 text-blue-800 focus:outline focus:outline-violet-500" type="text" style={inputstyle} placeholder="Confirm Password" />
                    <button className="bg-[#212edf] hover:bg-purple-600 duration-500" style={buttonstyle} >Sign UP</button>
                    <div className="flex"><p className="text-slate-500">Have an Account ?</p><Link to='/admin' className="font-bold text-indigo-700 hover:text-violet-700">&nbsp;Log IN</Link></div>
                </form>
            </div>
        </div>
    )
}

export default Registration