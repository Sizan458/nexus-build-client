import React from 'react';

import {
    useQuery,
   
  } from '@tanstack/react-query'
import useAxios from '../../../Hooks/useAxios/useAxios';
import ServicesAllCard from '../ServicsAllCard/ServicesAllCard';

const ServicesAll = () => {
    const axios=useAxios()
    const {data:services} = useQuery({
        queryKey:["services"],
        queryFn:async()=>{
            const res = await axios.get('/all-services ')
            return res.data
        }
    })
   
    return (
        <div className='w-[90%] mx-auto grid grid-cols-1 gap-4 m-6 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4'>
            {
            services &&  services.map(service =><ServicesAllCard key={service._id} service={service}/>)
            }
        </div>
    );
};

export default ServicesAll;