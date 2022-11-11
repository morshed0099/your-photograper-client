import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Reviews from "../pages/Reviews/Reviews";
import ServiceDetails from "../pages/Services/ServiceDetails";
import Services from "../pages/Services/Services";
import Signup from "../Shered/Signup";
import AddService from '../pages/AddService/AddService'
import PrivateRoute from "./PrivateRoute";

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
                element:<PrivateRoute><Services></Services></PrivateRoute>
            },
            {
                path:'/services/:id',  
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`) ,             
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
            }
        ]
    },
    
])
export default router