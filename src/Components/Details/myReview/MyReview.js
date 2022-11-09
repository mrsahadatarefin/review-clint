import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/Authprovider/Authprovider';








const MyReview = () => {
    const {user}=useContext(AuthContext)

    const handleSubmit = event =>{
        event.preventDefault();
        const form =event.target;
        const name=form.name.value ;
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








    return (
        <div>
            
            <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1  bg-slate-200 mt-10 rounded-md max-w-3xl mx-auto ">
          <input 
          name="name"
            type="text"
            required
            placeholder="name"
            className="input input-ghost p-10 input-bordered mt-5 "
          ></input>
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
        <input className="btn" type="submit" value="submit" />
      </form>
        </div>
    );
};

export default MyReview;