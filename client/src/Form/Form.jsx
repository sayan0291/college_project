const validationRules = {
    email: {
        required: {value:true,message: "Email is required"},
        pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,message: "Enter a valid email address"}
    },
    password: {
        required: {value:true,message: "Password is Required"},
        minLength: {value: 5,message: "Password Must Have 5 Characters"},
        maxLength: {value: 8,message: "Password Must Have 8 Characters"}
    },
    confirmPassword: {
        required: {value: true,message:"The field is required"},
        validate: {value: value => value === passwordvalue || "Password do not match"}
    },
    registrationNumber: {
        required: {value: true,message: "Registration No. is Required"},
        validate: {value: value => value.length === 10 || "Registration No. must have 10 characters" }
    },
    selectItem: {
        required: {value: true,message: "The field is required"}
    }
}

export const FormInput = ({type,placeHolder,validation,registerFor}) => {
    return (
        <input className="input-style" type={type} placeholder={placeHolder} {...validation(registerFor,validationRules[registerFor])}   />
    )
}

export const FormSelect = ({validation,registerFor,registerSelect,children}) => {
    return(
        <select className="select-section" {...validation(registerFor,validation[registerSelect])}>
            {children}
        </select>
    )
}