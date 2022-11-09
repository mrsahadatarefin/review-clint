import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/Authprovider/Authprovider";

const Details = () => {

    const detailsALL = useLoaderData();

  const { user } = useContext(AuthContext);
  const handleSubmit = event =>{
    event.preventDefault();
    const form =event.target;
   
    const email = user?.email ||'unregistered'
    const massage= form.massage.value ;

    const order ={
        service:_id,
        customer:name,
        email,
        massage
    }
   

    fetch('http://localhost:5000/orders',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(order)
    })

    .then( res =>res.json())
    .then(data =>{
        
        console.log(data)
        if( data.acknowledged){
         alert('review placed ') 
         form.reset(); 
        }
    
    })
    
    .catch (er => console.error(er));
   

   }
  
  const { _id, name, title, description, image, price } = detailsALL;
   




  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl mt-10">
        <figure>
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{name}</h2>
          <p className="text-xl">{description}</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">see Review</button>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>

        <div><h1 className="text-2xl text-center mt-10">Add review</h1></div>
        <div className="grid grid-cols-1  bg-slate-200 mt-10 rounded-md max-w-3xl mx-auto ">
         
          <input 
          name="email"
          required
            type="email"
            placeholder="email"
            className="input input-ghost p-10 input-bordered mt-5"
            defaultValue={user?.email}
            readOnly
          ></input>
          <textarea
          required
            name="massage"
            id=""
            cols="30"
            rows="10"
            className="input input-ghost p-10  mt-5 "
            placeholder="Write your review "
          ></textarea>
        </div>
        <input className="btn" type="submit" value="Add review" />
      </form>
    </div>
  );
};

export default Details; 
