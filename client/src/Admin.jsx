import { Link } from "react-router-dom"

export const h2style = {
    color: "blue",
    fontSize: "1.5rem"
}

export const inputstyle = {
    padding: "5px",
    backgroundColor: "white",
    borderRadius: "5px",
    width: "80%"
}

export const buttonstyle = {
    padding: "5px 15px",
    borderRadius: "5px",
    color: "white"
}

function Admin(){
    return(
        <div className="w-full p-5 flex justify-center font-serif">
            <div className="px-23 bg-blue-100 rounded flex flex-col gap-5 py-5 w-1/3">
                <h2 style={h2style}>Sign IN</h2>
                <form action="submit" className="flex flex-col items-center gap-5">
                    <input type="text" style={inputstyle} placeholder="Enter Your Email" />
                    <input type="text" style={inputstyle} placeholder="Enter Password" />
                    <button className="bg-[#6495ED] hover:bg-blue-600 duration-200" style={buttonstyle}>Log IN</button>
                    <div className="flex"><p>Create Account ?</p><Link to='/registration' className="font-bold text-blue-500 hover:text-blue-600">&nbsp;Sign UP</Link></div>
                </form>
            </div>
        </div>
    )
}


export default Admin