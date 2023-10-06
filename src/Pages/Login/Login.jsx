import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { toast } from 'react-toastify';
import UseHooks from '../../Components/Hooks/UseHooks';

const Login = () => {

    const {userLogin} = UseHooks();
    const navigate = useNavigate();

    const handleEmailLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        userLogin(email, password)
        .then(() => {
            toast.success('Login Successfully');
            navigate('/');
        })
        .catch(error => {
            toast.error(error.message);
        })
    }


    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleEmailLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6 p-0">
                                    <button className="btn btn-neutral">Login</button>
                                </div>
                            </form>
                            <label className="label">
                                New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                            </label>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;