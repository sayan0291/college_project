import axios from 'axios'

async function onSubmit(data,navigate){
    try{
        await axios.post(
            "http://localhost:8080/user/register",
            data,
            {withCredentials: true}
        )
        alert("Register Succesfully")
        navigate('/home',{replace: true})
    }catch (error){
        alert(`Registration Unseccessfull ${error}`)
    }
}

export default onSubmit;