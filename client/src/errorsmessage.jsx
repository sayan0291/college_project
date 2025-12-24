function Errormessage({error}){
    
    return(
        <p className="text-red-500">{error.message}</p>
    )
}

export default Errormessage