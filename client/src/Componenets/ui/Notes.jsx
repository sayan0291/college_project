import { useState } from "react"
import { buttonhover, selectsection , semesters , notes } from "../styles.jsx"
import FileUpload from "./FileUpload.jsx"

function Notes(){

    const userDetails = JSON.parse(localStorage.getItem('userData'));

    const user = userDetails.user;

    const notesShow = user.role === "Teacher" ? {department: user.department} : {department: user.department,semester: user.semester}

    const notesObj = notes.find(obj => obj.sem === notesShow.semester)

    const allNotes = [];
    if(notesObj){
        const books = notesObj.dept[notesShow.department]
        allNotes.push(books)
    }
    console.log(allNotes)


    const [sem,setSem] = useState("")
    const setChange = (event) => {
        setSem(event.target.value)
    }

    return(
        <div className="px-10 py-5 font-serif min-h-110">
            {
                allNotes.map((obj,index) => 
                    (<p key={index}>{obj}</p>)
                )
            }
        </div>
    )
}

export default Notes