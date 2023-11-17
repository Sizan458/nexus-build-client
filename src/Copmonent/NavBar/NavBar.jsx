import { NavLink } from "react-router-dom";

import { DarkMode } from "../Hooks/DarkMode/DarkMode";
import { BsFillMoonFill,BsFillSunFill } from "react-icons/bs";

const NavBar = () => {
  const menu =<>
   <li  >
  <NavLink to='/' className="tab m-1 tab-lifted  tab-active    text-black" onClick="bg-blue-200" >Home</NavLink>
</li>
   <li>
  <NavLink to='/service' className="tab m-1 tab-lifted tab-active  text-black">Service</NavLink>
</li>
   <li>
  <NavLink to='/about' className="tab m-1 tab-lifted tab-active  text-black">About</NavLink>
</li>

  </>
  const {changeTheme,mode} =DarkMode();
    return (
        <div className="
        ">
          <div className="navbar bg-teal-100  mx-auto  dark:bg-stone-400  ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-100 rounded-box w-52">
        {menu}
      </ul>
    </div>
    <a className="btn   text-xl">daisyUI</a>
  </div>
  <div className="navbar-center border-b-stone-700 hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {menu}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn text-2xl font-bold  btn-circle" onClick={()=>changeTheme()}>{mode === "dark"? <BsFillMoonFill/>:<BsFillSunFill/>}</a>
  </div>
</div>
        </div>
        
    );
};

export default NavBar;