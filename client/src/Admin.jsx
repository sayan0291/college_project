function Admin(){
    return(
        <div className="w-full p-5 flex justify-center">
            <form action="submit" className="flex flex-col gap-5">
                <input type="text" placeholder="Enter Your Email" />
                <input type="text" placeholder="Enter Password" />
            </form>
        </div>
    )
}

export default Admin