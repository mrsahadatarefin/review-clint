import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/UseTittle";
import ServiceData from "../servicesData/ServiceData";

const ALLService = () => {
  const services = useLoaderData();
  useTitle('service')
  return (
    <div className='grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10'> 
      {services.map((service) => (
        <ServiceData key={service._id} service={service}></ServiceData>
      ))}
    </div>
  );
};

export default ALLService;
