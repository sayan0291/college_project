import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import {h2style, inputstyle, buttonstyle,firstSection,secondSection,buttonhover,changehover,formsection, selectsection} from "./styles"
import Errormessage from "./errorsmessage"

function Registration(){
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors,isSubmitting }
    } = useForm({mode: "onChange"})

    const onSubmit = (data) => console.log(data);

    const errormessages = errors.email?.message || errors.password?.message || errors.confirmpassword?.message || errors.select?.message || ""
    
    const passwordvalue = watch("password")

    return(
        <div className={firstSection}>
            <div className={secondSection}>
                <h2 style={h2style}>Sign UP</h2>
                <form className={formsection} onSubmit={handleSubmit(onSubmit)}>
                    <Errormessage error={errormessages && {message: errormessages}} />
                    <input type="text" style={inputstyle} placeholder="Enter Your Email" {...register("email",{required: {value:true,message: "The field is required"},pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,message: "Enter a valid email address"}})}/>
                    <input type="text" style={inputstyle} placeholder="Enter Password" {...register("password",{required: {value:true,message: "The field is required"},minLength: {value:5,message: "Password must have 5 characters"},maxLength: {value:9,message: "Password must have 9 characters"}})} />
                    <input type="text" style={inputstyle} placeholder="Confirm Password" {...register("confirmpassword",{required: {value: true,message:"The field is required"},validate: value => value === passwordvalue || "Password do not match"})}/>
                    <select className={selectsection} {...register("select",{required: {value:true,message: "The Field is Required"}})}>
                        <option value="">Select Department</option>
                        <option value="DCST">DCST</option>
                        <option value="DCHE">DCHE</option>
                        <option value="DEIE">DEIE</option>
                        <option value="DCE">DCE</option>
                        <option value="DME">DME</option>
                        <option value="DEE">DEE</option>
                    </select>
                    <button disabled={isSubmitting} style={buttonstyle} className={buttonhover}>Sign UP</button>
                    <div className="flex"><p className="text-gray-500">Have an Account ?</p><Link to='/admin' className={changehover}>&nbsp;Log IN</Link></div>
                </form>
            </div>
        </div>
    )
}

export default Registration