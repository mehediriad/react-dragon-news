import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const location = useLocation()
    const {user,loading} = useContext(AuthContext);

    if(loading){
        return <div className="text-center h-screen flex justify-center items-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"/>
};

export default PrivateRoute;