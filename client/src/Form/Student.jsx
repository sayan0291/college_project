import { Link,useNavigate } from "react-router-dom"
import {firstSection,secondSection,changehover} from "../Componenets/styles.jsx"
import { useForm } from 'react-hook-form'
import Errormessage from "../Form/FormHandler/errorsmessage.jsx";
import Onloginsubmit from "../Form/FormHandler/LoginHandler.jsx";
import { useState } from "react";
import { useUser } from '../Context/UserContext.jsx'
import { FormInput } from "./Form.jsx";


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
                <h2 className="h2-style">Student Login</h2>
                <form className="fl-col items-center gap-5" onSubmit={handleSubmit(handleFormSubmit)}>
                    <Errormessage error={errormessages && {message: errormessages}} />
                    <FormInput type="text" placeHolder="Enter Your Registration N0." validation={register} registerFor="registrationNumber" />
                    <FormInput type="password" placeHolder="Enter Your Password" validation={register} registerFor="password" />
                    <button disabled={isSubmitting} className="submit-button">Enter</button>
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