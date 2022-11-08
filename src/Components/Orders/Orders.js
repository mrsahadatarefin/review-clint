import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/Authprovider/Authprovider';

const Orders = () => {
    const {user}= useContext(AuthContext)
    const [order,setOrder]=useState({})
    
    console.log(
        order.email
    )
    
    useEffect(()=>{
fetch(`http://localhost:5000/orders?email=${user.email}`)
.then(res => res.json())
.then(data => setOrder(data))
    },[user?.email])
    
    return (
        <div>
            <h1>
                 {order.customer
}
            </h1>
        </div>
    );
};

export default Orders;