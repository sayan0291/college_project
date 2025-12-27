import axios from 'axios'

async function onRegisterSubmit(data,navigate){
    try{
        await axios.post(
            "http://localhost:8080/user/register",
            data,
            {withCredentials: true}
        )
        alert("Register Succesfully")
        navigate('/home',{replace: true})
    }catch (error){
        console.log(error);
        alert(`Registration Unseccessfull ${error}`)
    }
}

export default onRegisterSubmit;