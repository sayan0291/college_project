import { Link } from "react-router-dom"
import { firstSection,secondSection,changehover} from "../Componenets/styles.jsx"
import { useForm } from "react-hook-form"
import Errormessage from '../Form/FormHandler/errorsmessage.jsx'
import { useNavigate } from "react-router-dom"
import Onloginsubmit from "../Form/FormHandler/LoginHandler.jsx"
import { useUser } from '../Context/UserContext.jsx'
import { useState } from "react"
import { FormInput } from "./Form.jsx"


function Admin(){
    const navigate = useNavigate()
    const { login } = useUser()
    const [apiError, setapiError] = useState("")
    const {
        register,
        handleSubmit,
        formState: { errors,isSubmitting },
    } = useForm({mode: "onChange"});

    const errormessages = errors.email?.message || errors.password?.message || apiError || "";

    const handleloginSubmit = async (data) => {
        Onloginsubmit(data, navigate, setapiError, login)
    }

    return(
        <div className={firstSection}>
            <div className={secondSection}>
                <h2 className="h2-style">Sign IN</h2>
                <form className="fl-col items-center gap-5" onSubmit={handleSubmit(handleloginSubmit)}>
                    {errormessages && <Errormessage error={errormessages && {message: errormessages}} />}
                    <FormInput type="email" placeHolder="Enter Your Email:" validation={register} registerFor="email" />
                    <FormInput type="password" placeHolder="Enter Password" validation={register} registerFor="password" />
                    <button disabled={isSubmitting} className="submit-button">Log IN</button>
                    <div className="flex">
                        <p className="text-gray-500">Create Account ?</p>
                        <Link to='/registration' className={changehover}>&nbsp;Sign UP</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Admin