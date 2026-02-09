import axios from 'axios'

async function onRegisterSubmit(data,navigate,setapiError){
    try{
        await axios.post(
            "/user/register",
            data,
            {withCredentials: true}
        )
        alert("Register Succesfully")
        navigate('/home',{replace: true})
    }catch (error){
        const msg = error.response?.data?.message || error.message || "Login Failed";
        setapiError(msg)
    }
}

export default onRegisterSubmit;