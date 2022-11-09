import { prodErrorMap } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/Authprovider/Authprovider";
import OrderROw from "../OrderROw/OrderROw";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email || "sahadatarifin806@gmail.com"}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          setOrder(data.data);
        }
      });
  }, []);

  return (
    <div>
      <h1>{order.length}</h1>
      <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>massage</th>
        <th>Edit</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
      
     {order.map(orders =><OrderROw
     key={order._id} orders={orders}
     
     ></OrderROw>)}
     
       
     
    </tbody>
    
    
    
  </table>
</div>



    </div>
  );
};

export default Orders;
