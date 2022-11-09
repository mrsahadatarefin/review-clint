import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authprovider/Authprovider';

const AllReview = () => {
const {user}=useContext(AuthContext)
    const detailsALL = useLoaderData();
   
    const {massage,email,}=detailsALL
    return (
        <div>
            <h1>{massage}</h1>
        </div>
    );
};

export default AllReview;