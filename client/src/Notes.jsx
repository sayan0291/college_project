import { useState } from "react"

function Notes(){

    const [department,setDepartment] = useState("")
    const departmentchange = (event) => {
        setDepartment(event.target.value)
    }

    const [year,setYear] = useState("")
    const yearChange = (event) => {
        setYear(event.target.value)
    }

    const [sem,setSem] = useState("")
    const setChange = (event) => {
        setSem(event.target.value)
    }

    return(
        <div className="px-10 py-5 font-serif">
            <div className="relative w-fit mx-7 rounded-tl-md rounded-br-md gradient">
            <h2 className="text-white font-bold text-lg p-3 uppercase">
                Notes
            </h2>
            <span className="absolute -top-1 -right-1 flex">
                <span className="absolute inline-flex h-5 w-5 animate-ping rounded-full bg-sky-300 opacity-75"></span>
                <span className="relative inline-flex h-5 w-5 rounded-full bg-sky-400"></span>
            </span>
            </div>
            <div className="flex justify-between p-2">
                <div className="flex flex-col gap-5 m-5 padding-bottom">
                    <select className="p-2 bg-blue-300 rounded font-md text-blue-900" value={department} onChange={departmentchange}>
                        <option value="">Select Department</option>
                        <option value="DCST">DCST</option>
                        <option value="">Select Department</option>
                        <option value="">Select Department</option>
                    </select>

                    <select className="p-2 bg-blue-300 rounded font-md text-blue-900" value={year} onChange={yearChange}>
                        <option value="">Select Year</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd year</option>
                    </select>

                    <select className="p-2 bg-blue-300 rounded font-md text-blue-900" value={sem} onChange={setChange}>
                        <option value="">Select Sem</option>
                        <option value="1st Sem">1st Sem</option>
                        <option value="2nd Sem">2nd Sem</option>
                        <option value="3rd Sem">3rd Sem</option>
                        <option value="4th Sem">4th Sem</option>
                        <option value="5th Sem">5th Sem</option>
                        <option value="6th Sem">6th Sem</option>
                    </select>
                    <button class="px-5 py-2 font-semibold bg-blue-800 hover:bg-blue-500  text-white rounded-xl text-lg">Enter</button>
                </div>
                <div className="w-full border">
                    
                </div>
            </div>
        </div>
    )
}

export default Notes