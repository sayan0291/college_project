import { useState } from "react"

export default function FileUpload(){
    const [file,setFile] = useState(null);
    const handleChange = (e) =>{
        setFile(e.target.files[0])
    }


    return(
        <>
            <form>
                <input type="text" placeholder="File Name" />
                <input className="file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 file:py-3 file:px-6 file:m-4 file:rounded-full file:text-white file:border-none file:cursor-pointer file:shadow-lg file:shadow-blue-600/50 bg-gradient-to-br from-gray-600 to-gray-700 text-white/80 rounded-full cursor-pointer shadow-xl" type="file" onChange={handleChange} placeholder="Chose Notes" required />
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