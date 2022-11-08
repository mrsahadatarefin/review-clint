import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const detailsALL = useLoaderData();
  const { _id, name, title, description, image, price } = detailsALL;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl mt-10">
  <figure><img src={image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl">{name}</h2>
    <p className="text-xl">{ description}</p>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">see Review</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Details;
