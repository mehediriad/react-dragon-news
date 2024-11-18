import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {
    const {signInUser} = useContext(AuthContext)
    const nevigate = useNavigate()
    const location = useLocation()

    const handleLoginSubmit = (e) =>{
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email,password)
        .then((userCredential) => {
             
            const user = userCredential.user;

            location.state ? nevigate(location.state) : nevigate("/");
            
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }
    return (
        <div>
            <Navbar/>
            <div className="card bg-base-100 md:w-1/2 shrink-0 shadow-2xl mx-auto">
                <h2 className="text-2xl font-bold text-center">Login your account</h2>
                <form onSubmit={handleLoginSubmit} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className=" text-center mb-6">Dont’t Have An Account ? <Link to="/register" className="btn btn-link">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;