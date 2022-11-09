import { createBrowserRouter } from "react-router-dom";
import ALLService from "../Components/ALLService/ALLService";
import Details from "../Components/Details/Details";
import Blogs from "../Components/Home/Banner/Blogs";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Login/Register/Register";
import Orders from "../Components/Orders/Orders";


import Main from "../Layout/Main";


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
        }

    ]
    
    }
    ])
    export default router