
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




  const handleDelete = id =>{

    const proceed = window.confirm('Are you sure, you want to cancel this review')
    if( proceed){
fetch( `http://localhost:5000/orders?${id}`, {
    method:"DELETE" })
    .then(res =>res.json())
    .then(data =>{
        console.log(data)
      
        if( data.deletedCount > 0 ){
          alert('deleted successfully');

          const remaining =order.filter( odr => odr._id !==id);
          setOrder(remaining);
                  }
      
      
      })

     

    }
   

}



const handleStatusUpdate =id=>{
  fetch(`http://localhost:5000/orders?${id}`,{
    method:"PATCH",
    headers: { "Content-Type": "application/json" },
    body:JSON.stringify({status:'Approved'})
  })
  .then(res => res.json())
  .then (data => {
    console.log(data);

    if(data.modifiedCount > 0){

      const remaining = order.filter(odr =>odr._id !== id)
      const approving = order.find(odr =>odr._id === id)
      approving.status = 'Approved'
      const newOrders = [...remaining ,approving];
      setOrder(newOrders)

    }
  })
}









  return (
    <div>
      
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
     key={order._id} orders={orders} handleDelete={handleDelete}  handleStatusUpdate ={handleStatusUpdate }>
     
    

     </OrderROw>)}
     
       
     
    </tbody>
    
    
    
  </table>
</div>



    </div>
  );
};

export default Orders;
