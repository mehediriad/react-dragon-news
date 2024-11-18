import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import {  useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
    const {createUser,updateUserProfile} = useContext(AuthContext)
    const [termWarn,setTermWarn] = useState(false)
    const [passWarn,setPassWarn] = useState(false)
    const [urlWarn,setUrlWarn] = useState(false);
    const [regStatus,setRegStatus] = useState(false);

    const handleRegSubmit = (e) =>{
        e.preventDefault()

        

        setTermWarn(false)
        setPassWarn(false)
        setUrlWarn(false)
        setRegStatus(false)

        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value || "https://i.ibb.co.com/pnkRJw1/user.png";
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        

        if(photoUrl){
            const urlTest = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(photoUrl);
            if(!urlTest){
                setUrlWarn(true)

                return
            }
            
        }
        if(password.length < 6){
            setPassWarn(true)
            return
        }
        if(!terms){
            setTermWarn(true)
            return
        }

        createUser(email,password)
        .then((userCredential) => {
            
            const user = userCredential.user;
            updateUserProfile(name,photoUrl)
            setRegStatus(true)
            toast.success("User Created Successfully!");
            console.log(user);
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
          });



          e.target.reset()
        

    }
    return (
        <div>
            <Navbar/>
            <div className="card bg-base-100 md:w-1/2 shrink-0 shadow-2xl mx-auto">
                <h2 className="text-2xl font-bold text-center">Register your account</h2>
                <form onSubmit={handleRegSubmit} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name*</span>
                    </label>
                    <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">PhotoURL</span>
                    </label>
                    <input name="photoUrl" type="text" placeholder="PhotoURL" className={`input input-bordered ${urlWarn && "border-red-500"}`}/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email*</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password*</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className={`input input-bordered ${passWarn && "border-red-500"}`} required />
                    
                    </div>
                    <div className="form-control mt-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input name="terms" type="checkbox" className={`checkbox ${termWarn ? "checkbox-secondary": "checkbox-primary"}`} />
                            <span className={`label-text ${termWarn && "text-red-500"}`} >Accept Term & Conditions </span>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className=" text-center mb-6">Already Have An Account ? <Link to="/login" className="btn btn-link">Login</Link></p>
            </div>
            <ToastContainer />
  
        </div>
    );
};

export default Register;