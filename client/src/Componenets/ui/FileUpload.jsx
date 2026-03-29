import { useState } from "react"

export default function FileUpload(){
    const [file,setFile] = useState(null);
    const handleChange = (e) =>{
        setFile(e.target.files[0])
    }
    console.log(file)

    return(
        <>
            <form>
                <input type="file" onChange={handleChange} required />
                {file && (
                    <div>
                        <p>file name:{file.name}</p>
                        <p>size:{(file.size / 1024).toFixed(2)} KB</p>
                        <p>extension:{file.type}</p>
                    </div>
                )}
            </form>
        </>
    )
}