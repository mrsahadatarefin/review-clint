import { GoogleAuthProvider } from "firebase/auth";
import { Result } from "postcss";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/Authprovider/Authprovider";
import useTitle from "../../../Hooks/UseTittle";


const Register = () => {
    const {createUser, providerLogin}= useContext (AuthContext)
    useTitle('Register')
const navigate =useNavigate();
const location= useLocation();
const from = location.state?.form?.pathname||'/'


    const googleProvider=new GoogleAuthProvider()
    const handleGoogleSingIn=(event)=>{

        providerLogin(googleProvider)

        .then(result =>{
          const user = result.user ;
          console.log(user) 
          alert(' Sing up successful') 

          navigate(from, { replace: true });
        })
        .catch (error => console.error(error))
    


    }
  const handleRegister = (event) => {

   
    event.preventDefault();
const form =  event.target;
const email =form.email.value;
const password =form.password.value;
createUser(email,password)
.then(result =>{
    const user =result.user;
    console.log(user);
    form.reset();
    alert('Register success')  
})
.catch(err=>console.error(err));
  };
  return (
    <div>
      <div className="hero-content flex-col lg:flex-row md:grid cols-2 mt-7">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl font-bold text-center">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <p className="p-4  text-center  text-1xl text-red-700" onClick={handleGoogleSingIn}>Sing up with google</p>
          <p className=" p-4  text-center ">
            <Link to="/login">
              All ready have an account{" "}
              <span className="text-1xl text-red-700">Login</span>
            </Link>{" "}
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
