import { Link } from "react-router-dom";
import adminimage from './assets/admin.png'
import studentimage from './assets/student.png'


function Login(){
    const styling = {
        width: "50%",
        height: "300px",
        textAlign: "center"
    }
    const imgstyling = {
        border: "1px solid gray",
        borderRadius: "50%",
    }

    const buttonstyle = "px-5 py-2.5 text-lg font-bold bg-blue-200 hover:bg-blue-100 hover:text-blue-900 text-violet-700 rounded-lg text-sm m-2"

    return(
        <div className="flex flex-col md:flex-row items-center py-5 px-20 m-3 gap-5 font-serif">
            <div className="flex flex-col justify-center items-center" style={styling}>
                <img className="h-3/4" style={imgstyling} src={adminimage} alt="admin-image" />
                <Link to="/admin" className={buttonstyle}>Admin</Link>
            </div>
            <div className="flex flex-col justify-center items-center" style={styling}>
                <img className="h-3/4" style={imgstyling} src={studentimage} alt="user-icon" />
                <Link to="/student" className={buttonstyle}>Student</Link>
            </div>
        </div>
    );
}

export default Login