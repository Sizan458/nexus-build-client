import React, { useEffect, useState } from 'react';

import {
    useQuery,
   
  } from '@tanstack/react-query'
import useAxios from '../../../Hooks/useAxios/useAxios';
import ServicesAllCard from '../ServicsAllCard/ServicesAllCard';
import { useSearchParams} from "react-router-dom";
import Services from '../../Services/Services';

const ServicesAll = () => {
    const [room,setRoom]=useState()
    const [params ,setParams] = useSearchParams()
    const category =params.get('menu')
    //const axios=useAxios()
    //const {data:services} = useQuery({
        //queryKey:["services"],
       // queryFn:async()=>{
          //  const res = await axios.get('/all-services ')
           
         //   return res.data
       // }
   // })
    useEffect(()=>{
        fetch("https://nexus-build-server.vercel.app/all-services")
        .then(res=>res.json())
        .then(data=>{
            if(category){
             const filtered= data.filter(services=>services.category
                ===category)
                console.log(filtered)
                console.log(data);
             setRoom(filtered)
            }else setRoom(data)
        })
    },[category]);
    return (
        <div className='w-[90%] mx-auto grid grid-cols-1 gap-4 m-6 md:grid-cols-2 lg:grid-cols-3 '>
            {
           room &&  room.map(service =><ServicesAllCard key={service._id} service={service}/>)
            }
        </div>
    );
};

export default ServicesAll;