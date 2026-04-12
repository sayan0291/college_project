import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { firstSection,secondSection,changehover, selectsection ,departments , semesters} from "../Componenets/styles.jsx"
import {useForm} from 'react-hook-form'
import Errormessage from "../Form/FormHandler/errorsmessage.jsx"
import onRegisterSubmit from "../Form/FormHandler/RegistrationHandler.jsx"
import { useUser } from "../Context/UserContext.jsx"
import { FormInput,FormSelect } from "./Form.jsx"


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
                <h2 className="h2-style">Student</h2>
                <form className="fl-col items-center gap-5" onSubmit={handleSubmit(handleFormSubmit)}>
                    <Errormessage error={errormessages && {message: errormessages}}/>
                    <FormInput type="text" placeHolder="Enter Your Registration N0." validation={register} registerFor="registrationNumber" />
                    <div className="md:flex justify-center gap-3">
                        <FormSelect validation={register} registerFor="department" registerSelect="selectItem">
                            {departments.map((obj,index) => (<option key={index} value={obj.Value}>{obj.name}</option>))}
                        </FormSelect>
                        <FormSelect validation={register} registerFor="semester" registerSelect="selectItem">
                            {semesters.map((obj,index) => (<option key={index} value={obj.value}>{obj.name}</option>))}
                        </FormSelect>
                    </div>
                    <FormInput type="password" placeHolder="Enter Password" validation={register} registerFor="password" />
                    <FormInput type="password" placeHolder="Confirm Password" validation={register} registerFor="confirmPassword" />
                    <button disabled={isSubmitting} className="submit-button">Enter</button>
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