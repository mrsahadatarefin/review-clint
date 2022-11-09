import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/Authprovider/Authprovider';

const OrderROw = ({orders, handleDelete, handleStatusUpdate }) => {

const {massage,_id, status}=orders
const {user}=useContext(AuthContext);





    return (
        
      <tr>
      <th>
        <label>
          <button onClick={()=>handleDelete(_id)} className=' btn btn-ghost'>x</button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{user?.displayName}</div>
            <div className="text-sm opacity-50">{user?.email}</div>
          </div>
        </div>
      </td>
      <td>
        {massage}
        
      </td>
      
      <th>
        <button onClick={()=>handleStatusUpdate(_id)} className="btn btn-ghost btn-xs"> { status ? status:"pending"}</button>
      </th>
    </tr>
    );
};

export default OrderROw;