import {
    createBrowserRouter,Outlet
   
  } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Home from "../Homepage/Home/Home";
import Services from "../ServicePage/Services/Services";
import About from "../AboutPage/About/About";
import Servicess from "../Servicess/Servicess/Servicess";
import Order from "../Orderpage/Order/Order";
import Register from "../Registerpage/Register/Register";
import Login from "../LoginPage/Login/Login";
import PrivateRoute from "../Hooks/PrivateRoute/PrivateRoute";

const Router = createBrowserRouter([
    {
        path: "/",
        element:<div>
            <NavBar/>
            <Outlet/>
        </div>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
            path:"/service",
            element:<Services/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/service/:id",
                element:<PrivateRoute><Servicess/></PrivateRoute>,
                loader:({params})=>fetch(`https://nexus-build-server.vercel.app/all-services/${params.id}`)
            },
            {
              path:"/order" ,
               element:<PrivateRoute><Order/></PrivateRoute>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/login",
                element:<Login/>
            }
        ]
    }
])

export default Router;