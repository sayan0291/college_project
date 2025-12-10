import { Link } from "react-router-dom"
import Admin,{ h2style,inputstyle,buttonstyle } from "./Admin"
import React, {useState} from "react"

function Registration(){
    const [department,setDepartment] = useState("")
    const departmentchange = (event) => {
        setDepartment(event.target.value)
    }
    return(
        <div className="w-full py-10 flex justify-center font-serif">
            <div className="px-10 bg-blue-100 rounded-2xl flex flex-col gap-5 py-5 w-1/3 shadow">
                <h2 className="text-center font-bold" style={h2style}>Sign UP</h2>
                <form action="submit" className="flex flex-col items-center gap-5">
                    <input type="text" style={inputstyle} placeholder="Enter Your Email" />
                    <input type="text" style={inputstyle} placeholder="Enter Password" />
                    <input type="text" style={inputstyle} placeholder="Confirm Password" />
                    <button style={buttonstyle} className="bg-[#6495ED] hover:bg-blue-600 duration-200">Sign UP</button>
                    <div className="flex"><p className="text-gray-600">Have an Account ?</p><Link to='/admin' className="font-bold text-blue-500 hover:text-blue-600">&nbsp;Log IN</Link></div>
                </form>
            </div>
        </div>
    )
}

export default Registration