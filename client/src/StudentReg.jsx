import Admin,{ h2style,inputstyle,buttonstyle } from "./Admin"
import { Link } from "react-router-dom"
import React,{useState} from "react"

function StudentReg(){
    const [department,setDepartment] = useState("")
    const departmentchange = (event) => {
        setDepartment(event.target.value)
    }
    return(
        <div className="w-full p-5 flex justify-center font-serif">
            <div className="px-23 bg-blue-100 rounded flex flex-col gap-5 py-5 w-1/3">
                <h2 className="text-center font-bold" style={h2style}>Student</h2>
                <form action="submit" className="flex flex-col items-center gap-5">
                    <input type="text" style={inputstyle} placeholder="Enter Your Registration N0" />
                    <input type="text" style={inputstyle} placeholder="Enter Mobile No" />
                    <select className="p-2 bg-blue-200 rounded font-md text-blue-950 focus:outline focus:outline-violet-500" value={department} onChange={departmentchange}>
                        <option value="">Select Department</option>
                        <option value="DCST">DCST</option>
                        <option value="">Select Department</option>
                        <option value="">Select Department</option>
                    </select>
                    <button className="bg-[#6495ED] hover:bg-blue-600" style={buttonstyle}>Enter</button>
                    <div className="flex"><p>Have an Account ?</p><Link to='/student' className="font-bold text-blue-500 hover:text-blue-600">&nbsp;Log IN</Link></div>
                </form>
            </div>
        </div>
    )
}

export default StudentReg