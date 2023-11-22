import {
    Outlet,NavLink
   
  } from "react-router-dom";
const DashBoard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400 ">
               <ul className="menu">
                <li><NavLink to="/dashboard/cart">My Cart</NavLink></li>
                <li><NavLink to="/dashboard/review">Review</NavLink></li>
                <li><NavLink to="/dashboard/payment">Payment</NavLink></li>
                <div className="flex flex-col w-full">
  
  <div className="divide"></div> 
  
  
</div>
               </ul>
            </div>
            <div className="flex-1">
                <Outlet/>
            </div>
        </div>
    );
};

export default DashBoard;