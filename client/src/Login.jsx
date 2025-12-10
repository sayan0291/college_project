import { Link } from "react-router-dom";


function Login(){
    const styling = {
        border: "2px solid blue",
        borderRadius: "5px",
        width: "100%",
        height: "300px",
        textAlign: "center",
        padding: "15px"
    }

    const h1style = {
        fontSize: "3rem",
    }

    return(
        <div className="flex justify-between py-5 px-20 m-3 gap-5 font-serif">
            <div className="" style={styling}>
                <Link to="/admin" className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm m-2">Admin</Link>
                <Link to="/student" className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm m-2">Student</Link>
            </div>
        </div>
    );
}

export default Login