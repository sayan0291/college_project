import Admin,{ h2style,inputstyle,buttonstyle } from "./Admin"
import { Link } from "react-router-dom"

function Student(){
    return(
        <div className="w-full p-5 flex justify-center font-serif">
            <div className="px-23 bg-blue-100 rounded flex flex-col gap-5 py-5 w-1/3">
                <h2 className="text-center font-bold" style={h2style}>Student</h2>
                <form action="submit" className="flex flex-col items-center gap-5">
                    <input type="text" style={inputstyle} placeholder="Enter Your Registration N0" />
                    <input type="text" style={inputstyle} placeholder="Enter Mobile No" />
                    <button className="bg-[#6495ED] hover:bg-blue-600" style={buttonstyle}>Enter</button>
                </form>
            </div>
        </div>
    )
}

export default Student