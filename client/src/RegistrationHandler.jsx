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
        console.log(error)
        const msg = error.response?.data?.message || error.message || "Login Failed";
        console.log(msg)
        setapiError(msg)
    }
}

export default onRegisterSubmit;