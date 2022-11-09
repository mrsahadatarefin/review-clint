import { createBrowserRouter } from "react-router-dom";
import Addservice from "../Components/Addservice/Addservice";
import AllReview from "../Components/AllReview/AllReview";
import ALLService from "../Components/ALLService/ALLService";
import Details from "../Components/Details/Details";
import Blogs from "../Components/Home/Banner/Blogs";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Login/Register/Register";
import Orders from "../Components/Orders/Orders";


import Main from "../Layout/Main";
import PriviteRoute from "./PriviteRoute/PriviteRoute";


  const router =createBrowserRouter([
  
      {path:'/',element:<Main></Main>,
    children:[
       { path:'/',
        element:<Home></Home>},
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/service',
            loader:() => fetch("http://localhost:5000/services"),
            element:<ALLService></ALLService>

        },
        {
            path:'/details/:id',
            loader:({params}) => fetch(`http://localhost:5000/service/${params.id}`),
            element:<Details></Details>
        },
       
        {
            path:'/orders',
            element:<Orders></Orders>
                
            
        },
        {
            path:'/blog',
            element:<Blogs></Blogs>
        },
        {
            path:'/add-service',
            element:<PriviteRoute><Addservice></Addservice></PriviteRoute>
        }

    ]
    
    }
    ])
    export default router