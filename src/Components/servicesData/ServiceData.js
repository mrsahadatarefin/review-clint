import React from "react";

const ServiceData = ({ service }) => {
  const { name, title, description, image, price } = service;
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
            <button className="btn btn-primary">details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceData;
