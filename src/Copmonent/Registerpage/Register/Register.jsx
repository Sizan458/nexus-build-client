import Lottie from "lottie-react";
import registerJson from "../../../assets/register.json"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { AuthContext } from "../../Hooks/AutthProvider/AuthProvider";
import useAxios from "../../Hooks/useAxios/useAxios";
const Register = () => {
  const axios =useAxios()
  const [see,setSee]=useState(false);
  const{userEmail}=useContext(AuthContext);
  const handleRegister =e =>{
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const user ={name, email, password}
    //password condition
    if(password.length<6){
      swal("password must be at least 6 characters");
      return
    }else if(!/[A-Z]/.test(password)){
      swal("password must be at least  uppercase letter");
      return

     }else if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
      swal("password must be at least a special character");
      return
     }else{
      swal("Good job!", "You are successfully registered", "success");
     }
     //email & password  register
    userEmail(email, password)
    .then(result =>{console.log(result)})
    .catch(err =>{console.log(err)});
    //send user info  to database
     axios.post('/user',user)
   }
    return (
        <div className="w-[90%] mx-auto mt-2">
            <div className="hero bg-rose-200 rounded-lg dark:bg-orange-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register Now !</h1>
      <div className="h-[350px] md:h-[450px]">
        <Lottie animationData={registerJson} loop={true}  />
      </div>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-3">
      <form className="card-body " onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={see? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
          <div className="flex gap-2 justify-between">
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <span className="text-xm  mt-1 ml-[80px]" onClick={()=>setSee(!see)}>Show password</span>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>

        </div>
        <p className="text-xl font-bold text-black mt-2 text-center">Already have an account <Link to='/login' className="text-red-700">Login</Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;