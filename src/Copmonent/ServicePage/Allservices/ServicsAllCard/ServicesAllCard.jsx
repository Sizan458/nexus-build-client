import { Rating ,StickerStar} from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from 'react';
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';
import { PiCurrencyCircleDollarLight } from "react-icons/pi"
import { TbCategory2 } from "react-icons/tb";
const ServicesAllCard = ({service}) => {

    const {category,tittle,price,rating,img1,color,_id }=service 
    const myStyles = {
        itemShapes: StickerStar,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
      }
      
    return (
        <div>
         <LazyLoad threshold={0.40} height={500} transition opacity>  
                <Link to={`/service/${_id}`}>
          <div className="card  group bg-base-100 shadow-xl lg:h-[500px]" style={{background:color}}>
  <div className="card-body text-black dark:text-purple-700">
    <h2 className="card-title flex justify-center  font-bold  text-xl">{tittle}</h2>
    <p  className='flex justify-center '><Rating style={{ maxWidth: 150 }}  value={rating} readOnly itemStyles={myStyles}/></p>
    <div className='flex items-center justify-between m-3  text-xl font-bold text-black dark:text-purple-700'>
     <div className=' flex  items-center gap-1'>
      <p className='text-2xl font-bold' ><PiCurrencyCircleDollarLight/></p>
      <p>: {price}$</p>
     </div>
    
     <div className=' flex items-center  gap-1'>
      <p className='text-2xl font-bold'><TbCategory2/></p>
      <p>: {category}</p>
     </div>
    </div>
  </div>
  <figure><img src={img1}  className="h-[290px] g w-[280px] m-2  group-hover:scale-150 transition" /></figure>
</div>
          </Link>
         </LazyLoad>
            
        </div>
    );
};

export default ServicesAllCard;