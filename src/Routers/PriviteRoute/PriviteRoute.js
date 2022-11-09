import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authprovider/Authprovider';

const PriviteRoute = ({children}) => {

    const {user,Loading}=useContext(AuthContext)
    const location =useLocation()
if(Loading){
return<h1 className='text- 5xl text-center'>Loading......</h1>
}
    if(user ){
       return children
        
   
};
return <Navigate state={{from: location}} replace></Navigate>
}
export default PriviteRoute;