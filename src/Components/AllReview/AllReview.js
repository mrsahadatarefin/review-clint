import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../Contexts/Authprovider/Authprovider';

const AllReview = () => {
const {user}=useContext(AuthContext)
const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch(`https://review-server-ten.vercel.app/orders/`)
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