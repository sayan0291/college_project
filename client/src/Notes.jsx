import { useState } from "react"
import SectionHeading from "./SectionHeading"
import { buttonhover, selectsection } from "./styles"

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
                    <select className={selectsection} value={sem} onChange={setChange}>
                        <option value="">Select Sem</option>
                        <option value="1st Sem">1st Sem</option>
                        <option value="2nd Sem">2nd Sem</option>
                        <option value="3rd Sem">3rd Sem</option>
                        <option value="4th Sem">4th Sem</option>
                        <option value="5th Sem">5th Sem</option>
                        <option value="6th Sem">6th Sem</option>
                    </select>
                    <button class={buttonhover} style={{padding: "4px 5px",borderRadius: "5px"}}>Enter</button>
                </div>
                <div className="w-full border">
                    
                </div>
            </div>
        </div>
    )
}

export default Notes