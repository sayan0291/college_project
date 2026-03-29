import axios from 'axios'

async function Onloginsubmit(data, navigate, setapiError, login){
    try{
        const response = await axios.post(
            "/user/login",
            data,
            {withCredentials: true}
        )
        alert("login Succesfully")
        
        if (login) {
            login(response.data?.data || {});
        }
        
        navigate('/home',{replace: true})
    }catch (error){
        const msg = error.response?.data?.message || error.message || "Registration Failed"
        console.log(error)
        setapiError(msg)
    }
}

export default Onloginsubmit;