import { Link } from "react-router-dom"
import {h2style, inputstyle, buttonstyle,firstSection,secondSection,buttonhover,changehover,formsection} from "./styles"
import { useForm } from "react-hook-form"
import Errormessage from './errorsmessage'


function Admin(){
    const {
        register,
        handleSubmit,
        formState: { errors,isSubmitting },
    } = useForm({mode: "onChange"});

    const errormessages = errors.email?.message || errors.password?.message || "";

    const onSubmit = (data) => console.log(data)

    return(
        <div className={firstSection}>
            <div className={secondSection}>
                <h2 style={h2style}>Sign IN</h2>
                <form className={formsection} onSubmit={handleSubmit(onSubmit)}>
                    <Errormessage error={errormessages && {message: errormessages}} />
                    <input type="text" style={inputstyle} placeholder="Enter Your Email" {...register("email",{required: {value: true, message: "Email is Required"},pattern:{value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,message: "Enter a valid email dress"}})}/>
                    <input type="password" style={inputstyle} placeholder="Enter Password" {...register("password",{required: {value: true,message: "Give your password"}})} />
                    <button disabled={isSubmitting} className={buttonhover} style={buttonstyle}>Log IN</button>
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