import { toast } from "react-toastify";
import UseHooks from "../../Components/Hooks/UseHooks";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const { googleLogin, githubLogin } = UseHooks();
    const navigate = useNavigate()
    const handleLogin = (media) => {
        media()
            .then(() => {
                toast.success('Login Successfull');
                navigate('/');
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button onClick={() => handleLogin(googleLogin)} className="btn btn-neutral btn-outline mr-4">Google</button>
                <button onClick={() => handleLogin(githubLogin)} className="btn btn-neutral btn-outline">Github</button>
            </div>
        </>
    );
};

export default SocialLogin;