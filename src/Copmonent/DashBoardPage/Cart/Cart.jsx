import React from 'react';
import useAxios from '../../Hooks/useAxios/useAxios';
import {
    
    useQuery,
  } from '@tanstack/react-query'
  

const Cart = () => {
    const axios = useAxios()

    const {data:Services}=useQuery({
        queryKey:["order"],
        queryFn:async()=>{
          const order= await axios.get('/order')
          return order.data
        }
    })
    console.log(Services)
    return (
        <div>
            <h2 className='text-2xl'>My Cart</h2>
           
            <div>
                {
                 Services  &&   Services.map(menu=>{<div key={menu._id} className="overflow-x-auto">
                    <table className="table table-zebra">
                      {/* head */}
                      <thead>
                        <tr>
                          <th></th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Type</th>
                          <th>Services</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <th>1</th>
                          <td>{menu.name}</td>
                          <td>Quality Control Specialist</td>
                          <td>Blue</td>
                        </tr>
                       
                      </tbody>
                    </table>
                  </div>})
                }
            </div>
     
 
        
        </div>
    );
};

export default Cart;