import { Navigate } from "react-router-dom";
import UseHooks from "../Components/Hooks/UseHooks";

const PrivateRoute = ({ children }) => {

    const { user, loading } = UseHooks();

    if(loading) {
        return <h1 className="text-center text-5xl font-bold">Loading....</h1>
    }

    if (!user) {
        return <Navigate to='/login'></Navigate>
    }

    return children;
};

export default PrivateRoute;