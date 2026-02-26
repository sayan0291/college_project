import axios from 'axios'

async function onRegisterSubmit(data, navigate, setapiError, login){
    try{
        const response = await axios.post(
            "/user/register",
            data,
            {withCredentials: true}
        )
        alert("Register Succesfully")
        
        if (login) {
            login(response.data?.data || {});
            console.log(response.data?.data)
        }
        
        navigate('/home',{replace: true})
    }catch (error){
        const msg = error.response?.data?.message || error.message || "Login Failed";
        setapiError(msg)
    }
}

export default onRegisterSubmit;