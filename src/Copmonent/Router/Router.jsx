import {
    createBrowserRouter,Outlet
   
  } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Home from "../Homepage/Home/Home";
import Services from "../ServicePage/Services/Services";
import About from "../AboutPage/About/About";
import Servicess from "../Servicess/Servicess/Servicess";

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
                element:<Servicess/>,
                loader:({params})=>fetch(`https://nexus-build-server.vercel.app/all-services/${params.id}`)
            }
        ]
    }
])

export default Router;