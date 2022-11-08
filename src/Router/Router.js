import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ServiceDetails from "../pages/Services/ServiceDetails";
import Services from "../pages/Services/Services";

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
            }
        ]
    },
    
])
export default router