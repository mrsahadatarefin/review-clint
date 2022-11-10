import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { AuthContext } from '../../Contexts/Authprovider/Authprovider';

const AllReview = () => {
const {user}=useContext(AuthContext)
const [order, setOrder] = useState([]);
const {id} = useParams();


console.log(id)

  useEffect(() => {
    fetch(`https://review-server-mrsahadatarefin.vercel.app/orders/${id}`)
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
           
           
        </div>
    );
};

export default AllReview;