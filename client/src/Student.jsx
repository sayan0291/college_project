import { h2style,inputstyle,buttonstyle } from "./styles"
import { Link } from "react-router-dom"
import Registration,{firstSection,secondSection,buttonhover,changehover, formsection} from "./Registration"
import { useForm } from 'react-hook-form'


function Student(){
    const {register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data)

    return(
        <div className={firstSection}>
            <div className={secondSection}>
                <h2 className="text-center font-bold" style={h2style}>Student Login</h2>
                <form className={formsection} onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" style={inputstyle} placeholder="Enter Your Registration N0" {...register("registration", {required: {value: true,message: "The Field is Required"},minLength: {value:10 ,message: "Registration no. must be 10 characters"},maxLength: {value:10 ,message: "UserName must be 10 characters"}})} />
                    <button className={buttonhover} style={buttonstyle}>Enter</button>
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