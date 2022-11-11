import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Reviews from "../pages/Reviews/Reviews";
import ServiceDetails from "../pages/Services/ServiceDetails";
import Services from "../pages/Services/Services";
import Signup from "../Shered/Signup";
import AddService from '../pages/AddService/AddService'
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog";

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
                loader:()=>fetch('https://your-photograper-server-morshed0099.vercel.app/services'),
                element:<Services></Services>
            },
            {
                path:'/services/:id',  
                loader:({params})=>fetch(`https://your-photograper-server-morshed0099.vercel.app/services/${params.id}`) ,             
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
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
                element:<PrivateRoute><Reviews></Reviews></PrivateRoute>

            },
            {
               path:'/addservice',
               element:<PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    },
    
])
export default router