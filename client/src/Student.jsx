import { Link } from "react-router-dom"
import {h2style,inputstyle,buttonstyle,firstSection,secondSection,buttonhover,changehover,formsection} from "./styles"
import { useForm } from 'react-hook-form'
import Errormessage from "./errorsmessage";


function Student(){
    const {register,
        handleSubmit,
        formState: { errors,isSubmitting },
    } = useForm({mode: "onChange"});

    const onSubmit = (data) => console.log(data)
    const errormessages = errors.registration?.message || "";

    return(
        <div className={firstSection}>
            <div className={secondSection}>
                <h2 className="text-center font-bold" style={h2style}>Student Login</h2>
                <form className={formsection} onSubmit={handleSubmit(onSubmit)}>
                    <Errormessage error={errormessages && {message: errormessages}} />
                    <input type="text" style={inputstyle} placeholder="Enter Your Registration N0" {...register("registration", {required: {value: true,message: "The Field is Required"},validate: value => value.length === 10 || "Registration no must have 10 chracters"})} />
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