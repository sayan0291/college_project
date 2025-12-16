import { h2style,inputstyle,buttonstyle } from "./styles"
import { Link } from "react-router-dom"
import React,{useState} from "react"
import Registration,{firstSection,secondSection,buttonhover,changehover,formsection, selectsection} from "./Registration"
import {useForm} from 'react-hook-form'


function StudentReg(){
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data)

    const [department,setDepartment] = useState("")
    const departmentchange = (event) => {
        setDepartment(event.target.value)
    }
    return(
        <div className={firstSection}>
            <div className={secondSection}>
                <h2 style={h2style}>Student</h2>
                <form className={formsection} onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" style={inputstyle} placeholder="Enter Your Registration N0" {...register("registration",{required: {value: true ,message: "The Field is Required"},minLength: {value:10 ,message: "The Field is Required"},maxLength: {value:10 ,message: "Registration no. must be 10 characters"}})} />
                    {errors.registration && <p className="text-red-600">{errors.registration.message}</p>}
                    <select className={selectsection} value={department} onChange={departmentchange} {...register("select",{required: {value:true,message: "The Field is Required"}})} >
                        <option value="">Select Department</option>
                        <option value="DCST">DCST</option>
                        <option value="">Select Department</option>
                        <option value="">Select Department</option>
                    </select>
                    {errors.select && <p className="text-red-600">{errors.select.message}</p>}
                    <button className={buttonhover} style={buttonstyle}>Enter</button>
                    <div className="flex">
                        <p>Have an Account ?</p>
                        <Link to='/student' className={changehover}>&nbsp;Log IN</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default StudentReg