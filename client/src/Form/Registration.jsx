import { Link,useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import {firstSection,secondSection,changehover ,departments} from "../Componenets/styles.jsx"
import Errormessage from "../Form/FormHandler/errorsmessage.jsx"
import onRegisterSubmit from "../Form/FormHandler/RegistrationHandler.jsx"
import { useState } from "react"
import { useUser } from "../Context/UserContext.jsx"
import { FormInput,FormSelect } from "./Form.jsx"

function Registration(){
    const navigate = useNavigate();
    const { login } = useUser()
    const [apiError,setapiError] = useState("")
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors,isSubmitting }
    } = useForm({mode: "onChange"})

    const handleFormSubmit = async (data) => {
        await onRegisterSubmit(data, navigate, setapiError, login)
    }

    const errormessages = errors.email?.message || errors.password?.message || errors.confirmpassword?.message || errors.select?.message || apiError || ""
    
    const passwordvalue = watch("password")

    return(
        <div className={firstSection}>
            <div className={secondSection}>
                <h2 className="h2-style">Sign UP</h2>
                <form className="fl-col items-center gap-5" onSubmit={handleSubmit(handleFormSubmit)}>
                    <Errormessage error={errormessages && {message: errormessages}} />
                    <FormInput type="email" placeHolder="Enter Your Email:" validation={register} registerFor="email" />
                    <FormInput type="password" placeHolder="Enter Password" validation={register} registerFor="password" />
                    <FormInput type="password" placeHolder="Confirm Password" validation={register} registerFor="confirmPassword" />
                    <FormSelect validation={register} registerFor="department" registerSelect="selectItem">
                        {departments.map((obj,index) => (<option key={index} value={obj.Value}>{obj.name}</option>))}
                    </FormSelect>
                    <button disabled={isSubmitting} className="submit-button">Sign UP</button>
                    <div className="flex"><p className="text-gray-500">Have an Account ?</p><Link to='/admin' className={changehover}>&nbsp;Log IN</Link></div>
                </form>
            </div>
        </div>
    )
}

export default Registration