import { MdBackupTable } from "react-icons/md"
import { Link } from "react-router-dom"

export const h2style = {
    color: "blue",
    fontSize: "1.5rem"
}

export const inputstyle = {
    padding: "5px 10px",
    backgroundColor: "white",
    borderRadius: "10px",
    width: "100%",
    fontSize:"16px",
    color:"navy",
    boxShadow:"0 1px 6px rgba(98, 125, 215, 0.626)"

}

export const buttonstyle = {
    padding: "5px 30px",
    borderRadius: "20px",
    color: "white",
    
}

function Admin(){
    return(
        <div className="w-full py-10 flex justify-center font-serif">
            <div className="px-10 bg-blue-100 rounded-2xl flex flex-col gap-5 py-5 w-1/3 shadow">
                <h2 className="text-center font-bold" style={h2style}>Sign IN</h2>
                <form action="submit" className="flex flex-col items-center gap-5">
                    <input className="placeholder:text-gray-500 text-blue-800 focus:outline focus:outline-violet-500" type="text" style={inputstyle} placeholder="Enter Your Email" />
                    <input className="placeholder:text-gray-500 text-blue-800 focus:outline focus:outline-violet-500" type="text" style={inputstyle} placeholder="Enter Password" />
                    <button className="bg-[#212edf] hover:bg-purple-600 duration-500" style={buttonstyle}>Log IN</button>
                    <div className="flex"><p className="text-gray-600">Create Account ?</p><Link to='/registration' className="font-bold text-blue-500 hover:text-blue-600">&nbsp;Sign UP</Link></div>
                </form>
            </div>
        </div>
    )
}


export default Admin