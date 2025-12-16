import { Link } from "react-router-dom"
import { h2style, inputstyle, buttonstyle } from "./styles"
import Registration,{firstSection,secondSection,buttonhover,changehover, formsection} from "./Registration"
import { useForm } from "react-hook-form"

function Admin(){
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data)

    return(
        <div className={firstSection}>
            <div className={secondSection}>
                <h2 style={h2style}>Sign IN</h2>
                <form className={formsection} onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" style={inputstyle} placeholder="Enter Your Email" {...register("email",{required: {value: true, message: "Email is Required"},minLength: {value: 5,message: "Password must be 5-8 characters"},maxLength: {value: 8,message: "Password must be 5-8 characters"}})}/>
                    {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                    <input type="text" style={inputstyle} placeholder="Enter Password" {...register("password",{required: {value: true,message: "Please Secure Your Account"}})} />
                    {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                    <button className={buttonhover} style={buttonstyle}>Log IN</button>
                    <div className="flex">
                        <p className="text-gray-600">Create Account ?</p>
                        <Link to='/registration' className={changehover}>&nbsp;Sign UP</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Admin