import { Link } from "react-router-dom"
import { h2style, inputstyle, buttonstyle,firstSection,secondSection,buttonhover,changehover,formsection, selectsection} from "./styles"
import {useForm} from 'react-hook-form'
import Errormessage from "./errorsmessage"


function StudentReg(){
    const {
        register,
        handleSubmit,
        formState: { errors,isSubmitting },
    } = useForm({mode: "onChange"});

    const onSubmit = (data) => console.log(data)
    const errormessages = errors.registration?.message || errors.select?.message || ""

    return(
        <div className={firstSection}>
            <div className={secondSection}>
                <h2 style={h2style}>Student</h2>
                <form className={formsection} onSubmit={handleSubmit(onSubmit)}>
                    <Errormessage error={errormessages && {message: errormessages}}/>
                    <input type="text" style={inputstyle} placeholder="Enter Your Registration N0" {...register("registration",{required: {value: true ,message: "The Field is Required"},validate: {value: value => value.length === 10 || "Registration no must have 10 characters"}})} />
                    <select className={selectsection} {...register("select",{required: {value:true,message: "The Field is Required"}})} >
                        <option value="">Select Department</option>
                        <option value="DCST">DCST</option>
                        <option value="">Select Department</option>
                        <option value="">Select Department</option>
                    </select>
                    <button disabled={isSubmitting} className={buttonhover} style={buttonstyle}>Enter</button>
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