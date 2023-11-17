import {
    createBrowserRouter,Outlet
   
  } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Home from "../Homepage/Home/Home";
import Services from "../ServicePage/Services/Services";
import About from "../AboutPage/About/About";

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
            }
        ]
    }
])

export default Router;