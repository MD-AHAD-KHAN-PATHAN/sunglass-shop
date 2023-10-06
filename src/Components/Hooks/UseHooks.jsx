import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const UseHooks = () => {

    const all = useContext(AuthContext);

    return all;
};

export default UseHooks;