import { useState } from "react"
import { buttonhover, selectsection , semesters } from "../styles.jsx"
import FileUpload from "./FileUpload.jsx"

function Notes(){

    const [sem,setSem] = useState("")
    const setChange = (event) => {
        setSem(event.target.value)
    }

    return(
        <div className="px-10 py-5 font-serif">
            <div className="flex justify-between p-2">
                <div className="flex flex-col gap-5 m-5 bg-gray-300 padding-bottom">
                    <select className={selectsection} value={sem} onChange={setChange}>
                        {semesters.map((obj,index) => (<option key={index} value={obj.value}>{obj.name}</option>))}
                    </select>
                    <button className={buttonhover} style={{padding: "4px 5px",borderRadius: "5px"}}>Enter</button>
                </div>
                <div className="w-full border">
                    <FileUpload />
                </div>
            </div>
        </div>
    )
}

export default Notes