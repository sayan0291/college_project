import { Link } from "react-router-dom"
import {h2style,inputstyle,buttonstyle,firstSection,secondSection,buttonhover,changehover,formsection} from "../Componenets/styles.jsx"
import { useForm } from 'react-hook-form'
import Errormessage from "../Form/FormHandler/errorsmessage.jsx";
import Onloginsubmit from "../Form/FormHandler/LoginHandler.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUser } from '../Context/UserContext.jsx'


function Student(){
    const navigate = useNavigate()
    const { login } = useUser()
    const [apiError,setapiError] = useState("")

    const {register,
        handleSubmit,
        formState: { errors,isSubmitting },
    } = useForm({mode: "onChange"});

    const handleFormSubmit = (data) =>{
        Onloginsubmit(data, navigate, setapiError, login)
    }
    const errormessages = errors.registrationNumber?.message || errors.password?.message || apiError || "";

    return(
        <div className={firstSection}>
            <div className={secondSection}>
                <h2 className="text-center font-bold" style={h2style}>Student Login</h2>
                <form className={formsection} onSubmit={handleSubmit(handleFormSubmit)}>
                    <Errormessage error={errormessages && {message: errormessages}} />
                    <input type="text" style={inputstyle} placeholder="Enter Your Registration N0" {...register("registrationNumber", {required: {value: true,message: "This Field is Required"},validate: value => value.length === 10 || "Registration no must have 10 chracters"})} />
                    <input type="text" style={inputstyle} placeholder="Enter Your Password" {...register("password", {required: {value: true,message: "This Field is Required"},minLength: {value:5,message: "Password must have 5 characters"},maxLength: {value:9,message: "Password must have 9 characters"}})} />
                    <button disabled={isSubmitting} className={buttonhover} style={buttonstyle}>Enter</button>
                    <div className="flex">
                        <p className="text-gray-600">Create Account ?</p>
                        <Link to='/studentregistration' className={changehover}>&nbsp;Sign UP</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Student