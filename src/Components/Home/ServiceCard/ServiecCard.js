import React from "react";
import { Link } from "react-router-dom";





const ServiecCard = ({ service }) => {
  
  


  const { _id, name, title, description, image, price } = service;
  return (



    <div>



<div className="card card-compact w-96 bg-base-100 shadow-xl">
     
      


<figure>
    <img src={image} alt="Shoes" />
  </figure>

  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description.slice(0, 100)}....</p>
    <p className="font-bold"> Price:${price}</p>
    <div className="card-actions justify-end">
      <Link to={`/details/${_id}`}>
        <button className="btn btn-primary">details</button>
      </Link>
    </div>
  </div>
</div>



    </div>
  );
};

export default ServiecCard;
