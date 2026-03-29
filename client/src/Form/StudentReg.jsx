import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { h2style, inputstyle, buttonstyle,firstSection,secondSection,buttonhover,changehover,formsection, selectsection ,departments , semesters} from "../Componenets/styles.jsx"
import {useForm} from 'react-hook-form'
import Errormessage from "../Form/FormHandler/errorsmessage.jsx"
import onRegisterSubmit from "../Form/FormHandler/RegistrationHandler.jsx"
import { useUser } from "../Context/UserContext.jsx"


function StudentReg(){
    const navigate = useNavigate()
    const { login } = useUser()
    const [apiError,setapiError] = useState("")
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors,isSubmitting },
    } = useForm({mode: "onChange"});

    const handleFormSubmit = (data) => {
        onRegisterSubmit(data, navigate, setapiError, login)
    }

    const passwordvalue = watch("password")
    
    const errormessages = errors.registrationNumber?.message || errors.department?.message || errors.semester?.message || apiError || ""

    return(
        <div className={firstSection}>
            <div className={secondSection}>
                <h2 style={h2style}>Student</h2>
                <form className={formsection} onSubmit={handleSubmit(handleFormSubmit)}>
                    <Errormessage error={errormessages && {message: errormessages}}/>
                    <input type="text" style={inputstyle} placeholder="Enter Your Registration N0." {...register("registrationNumber",{required: {value: true ,message: "The Field is Required"},validate: {value: value => value.length === 10 || "Registration no must have 10 characters"}})} />
                    <div className="md:flex justify-center gap-3">
                        <select className={selectsection} {...register("department",{required: {value:true,message: "The Field is Required"}})} >
                            {departments.map((obj,index) => (<option key={index} value={obj.Value}>{obj.name}</option>))}
                        </select>
                        <select className={selectsection} {...register("semester",{required: {value:true,message: "The Field is Required"}})}>
                            {semesters.map((obj,index) => (<option key={index} value={obj.value}>{obj.name}</option>))}
                        </select>
                    </div>
                    <input type="text" style={inputstyle} placeholder="Enter Password" {...register("password",{required: {value:true,message: "The field is required"},minLength: {value:5,message: "Password must have 5 characters"},maxLength: {value:9,message: "Password must have 9 characters"}})} />
                    <input type="text" style={inputstyle} placeholder="Confirm Password" {...register("confirmpassword",{required: {value: true,message:"The field is required"},validate: value => value === passwordvalue || "Password do not match"})}/>
                    <button disabled={isSubmitting} className={buttonhover} style={buttonstyle}>Enter</button>
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