import { Rating ,StickerStar} from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from 'react';
import { Link } from "react-router-dom";
const ServicesAllCard = ({service}) => {

    const {category,tittle,price,rating,img1,color,_id }=service 
    const myStyles = {
        itemShapes: StickerStar,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
      }
      
    return (
        <div>
          <Link to={`/service/${_id}`}>
          <div className="card  group bg-base-100 shadow-xl lg:h-[500px]" style={{background:color}}>
  <div className="card-body">
    <h2 className="card-title">{tittle}</h2>
    <p ><Rating style={{ maxWidth: 150 }}  value={rating} readOnly itemStyles={myStyles}/></p>
  </div>
  <figure><img src={img1}  className="h-[290px] g w-[280px] m-2  group-hover:scale-150 transition" /></figure>
</div>
          </Link>
            
        </div>
    );
};

export default ServicesAllCard;