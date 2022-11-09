import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/Authprovider/Authprovider";
import useTitle from "../../Hooks/UseTittle";

const AddService = () => {
    const {user}=useContext(AuthContext);
    const [formState, setFormState] = useState({
      name: "",
      image: "",
      price: 0,
      description: "",
    })

    const handleOnChange = e => {
      const {name, value} = e.target;
      setFormState({...formState, [name]: value})
    }

    useTitle('ADD-service')

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    // const form = event.target;
    // console.log(form)
    // const name = form.name.value;
    // const image = form.imageUrl.value;
    // const price = form.price.value;
    // const description = form.description.value;

    // const order = {
    //   name,
    //   image,
    //   price,
    //   description,
    // };

    console.log(formState)

    fetch("http://localhost:5000/service", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formState),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.acknowledged) {
          alert("review placed ");
          // form.reset();
        } else {
          alert("try agin");
          // form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div>
      <form onSubmit={handlePlaceOrder}>
      <h1 className="text-3xl font-bold text-center mt-10"> ADD Service</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
          <input
            type="text"
            name="name"
            placeholder="Service name"
            className="input input-ghost w-full   input-bordered"
            required
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="image"
            placeholder="image url"
            className="input input-ghost w-full  input-bordered "
            required
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="price"
            placeholder="price"
            className="input input-ghost w-full   input-bordered"
            required
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="description"
            placeholder="description"
            className="input input-ghost w-full input-bordered  "
            required
            onChange={handleOnChange}
          />
        </div>
        <input className="btn mt-10 mx-9" type="submit" value="ADD Service" />
      </form>
    </div>
  );
};

export default AddService;
