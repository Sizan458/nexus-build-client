import Lottie from "lottie-react";
import loginJson from "../../../assets/login.json"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";

import { AiOutlineGoogle } from "react-icons/ai";
import swal from 'sweetalert';
import { AuthContext } from "../../Hooks/AutthProvider/AuthProvider";
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import useAxios from "../../Hooks/useAxios/useAxios";
const Login = () => {
     const axios =useAxios()
  const [see,setSee]=useState(false);
  const[logError,setLogError]=useState('');
  const[success, setSuccess]=useState('');
  const  capthaRef=useRef(null);
  const [disable, setDisable]=useState(true);
  //page reload function
  const location=useLocation()
  const navigate  =useNavigate()
  const{signIn,googleSignIn}=useContext(AuthContext)
  const handleLogIn = e => {
    e.preventDefault();
    const from = e.target;
    const email= from.email.value;
    const password = from.password.value;
    const user ={email,password}
     
     
      //reset error message & success message
      setLogError('');
      setSuccess('');
       //sign in the user with the email and password
       signIn(email,password)
  
       .then(result=>{console.log(result)
  
         // navigate to page after successful login
         navigate(location?.state? location?.state : '/')
         setSuccess('Successfully login ');
       })
       .catch(err=>{setLogError(err.message)});
  
   }
  
   //login  with google
   const handleGoogle=()=>{
    googleSignIn()
    .then(result=>{
       console.log(result.user)
       //send user  database
       const useInfo = {
            email: result.user?.email,
            name: result.user?.displayName
       }
       axios.post('/user',useInfo)
       //if successful login
       swal("Good job!", "You are successfully registered", "success");
        // navigate to page after successful login
        navigate(location?.state? location?.state : '/')
    })
    .then(error=>{
      console.log(error.message)
      //if failed login
      swal("There was an problem. Please try again");
      return 
    })
  }

  //captcha
  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])
  const handleValidate=()=>{
    const value = capthaRef.current.value
    if(validateCaptcha(user_captcha_value)==true){
         setDisable(false)
    }
  }

  
    return (
        <div className="w-[97%] mx-auto m-2 ">
           <div className=" bg-purple-300   dark:bg-indigo-300  dark:rounded-lg  lg:w-[90%] lg:mx-auto" >
  <div className="hero-content flex-col gap-4 lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-2xl font-bold text-center md:text-4xl lg:ml-[160px] dark:text-black">Login Now!</h1>
      <Lottie animationData={loginJson} className="m-3 h-[250px] md:h-[340px] lg:h-[550px] lg::ml-[160px]"></Lottie>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
      <form className="card-body" onSubmit={handleLogIn}>
      {
    logError && <p className="text-red-700 text-center text-2xl">{logError}</p>
  }
  {
   success &&  <p className="text-green-700 text-center text-2xl">{success}</p>
  }
       
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
          <input type={see? "text" : "password"}  placeholder="password" name="password" className="input input-bordered" required />
          <div className="flex gap-2 justify-between">
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <span className="text-xm  mt-1 ml-[80px]"  onClick={()=>setSee(!see)}>Show password</span>
          </div>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" ref={capthaRef} placeholder="Type the captcha above" name="" className="input input-bordered"  required/>
         <div>
         <button onClick={handleValidate} className="btn btn-outline btn-secondary btn-sm">validate</button>
         </div>
        </div>
        <div className="form-control mt-6">
       <div>
       <button   disabled={disable} className="btn btn-outline btn-info text-xl font-bold">Login</button>
       </div>
       
        <div>
        <button onClick={handleGoogle} className="btn btn-outline btn-accent text-4xl font-bold mt-4" ><AiOutlineGoogle></AiOutlineGoogle></button>
        </div>
       
        <div>
            <p className="text-xl font-bold text-black mt-2 text-center">Do not  have an account <Link to='/register' className="text-rose-700">Register</Link></p>
        </div>
        </div>
      </form>
    </div>
  </div>
</div> 
            
        </div>
    );
};

export default Login;