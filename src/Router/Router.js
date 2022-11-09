import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Reviews from "../pages/Reviews/Reviews";
import ServiceDetails from "../pages/Services/ServiceDetails";
import Services from "../pages/Services/Services";
import Signup from "../Shered/Signup";

const { createBrowserRouter } = require("react-router-dom");

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
               element:<Home></Home>
                
            },
            {
                path:'/services',
                loader:()=>fetch('http://localhost:5000/services'),
                element:<Services></Services>
            },
            {
                path:'/services/:id',  
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`) ,             
                element:<ServiceDetails></ServiceDetails>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
               path:'/signup',
               element:<Signup></Signup>
            },
            {
                path:'/reviews',
                element:<Reviews></Reviews>

            }
        ]
    },
    
])
export default router