import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import UseHooks from '../../Components/Hooks/UseHooks';
import { toast } from 'react-toastify';

const Register = () => {

    const { createUser, handleUpdateProfile } = UseHooks();
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const name = e.target.name.value;
        const url = e.target.url.value;
        const password = e.target.password.value;

        console.log(name, email, url, password);

        if (password.length < 6) {
            return toast('password must be at least 6 characters !!!');
        }

        createUser(email, password)
            .then(() => {
                handleUpdateProfile(name, url)
                .then(() => {
                    toast.success('Registation Successfully');
                    navigate('/');
                })
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
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="name" name='name' placeholder="Full name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Url</span>
                                    </label>
                                    <input type="text" name='url' placeholder="image url" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6 p-0">
                                    <button className="btn btn-neutral">Register</button>
                                </div>
                            </form>
                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;