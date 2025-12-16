import { useState } from "react"
import SectionHeading from "./SectionHeading"
export const selectstyle = "p-2 bg-blue-200 rounded font-md text-blue-950 focus:outline focus:outline-violet-500"

function Notes(){
    const [sem,setSem] = useState("")
    const setChange = (event) => {
        setSem(event.target.value)
    }

    return(
        <div className="px-10 py-5 font-serif">
            <SectionHeading categories="NOTES" />
            <div className="flex justify-between p-2">
                <div className="flex flex-col gap-5 m-5 padding-bottom">
                    <select className={selectstyle} value={sem} onChange={setChange}>
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