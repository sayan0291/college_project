import axios from 'axios'

async function Onloginsubmit(data,navigate){
    try{
        await axios.post(
            "http://localhost:8080/user/login",
            data,
            {withCredentials: true}
        )
        alert("login Succesfully")
        navigate('/home',{replace: true})
    }catch (error){
        console.log(error);
        alert(`login Unseccessfull ${error}`)
    }
}

export default Onloginsubmit;