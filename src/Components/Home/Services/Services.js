import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiecCard from '../ServiceCard/ServiecCard';

const Services = () => {
const [services,setServices] = useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res =>res.json())
    .then(data =>setServices(data))
   
    
})


    return (
        <div>
            
            <div><h3 className='text-3xl font-bold text-rose-700 text-center mt-6'>Services</h3></div>

            <div className='grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10'>
                {services.map(service=><ServiecCard  
                kay={service._id} service={service}></ServiecCard>)}
              
                
                
                
            </div>
            <Link className="btn btn-active btn-secondary   px-5  mt-5  mx-5" to="/service">See all</Link>
        </div>
        
    );
};

export default Services;