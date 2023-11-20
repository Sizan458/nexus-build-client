
import { useLoaderData } from "react-router-dom";
import { PiCurrencyCircleDollarLight } from "react-icons/pi"
import { TbCategory2 } from "react-icons/tb";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import { Rating ,Star} from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
const Servicess = () => {
    const services =useLoaderData()
    console.log(services)
    const {category,tittle,price,rating,img1,color,_id,img2,img3,description
    }=services
    //rating fn
    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
      }
    return (
        <div className="w-[95%] mx-auto mt-2 ">
            <div className="card  shadow-xl" style={{background:color}}>
  <figure className="w-[97%] mx-auto mt-2"><img src={img1} className=" h-[240px] p-2 w-full rounded-xl md:h-[365px] lg:h-[500px] "/></figure>
  <div className="card-body">
    <h2 className="card-title flex justify-center text-xl font-bold text-black dark:text-red-800">{tittle}</h2>
    <p className="text-lg font-semibold text-black dark:text-red-800">{description}</p>
    <div className='flex items-center justify-between m-3  text-xl font-bold text-black dark:text-red-800 md:mx-[150px] lg:mx-[230px] xl:mx-[380px]'>
     <div className=' flex  items-center gap-1'>
      <p className='text-2xl font-bold' ><PiCurrencyCircleDollarLight/></p>
      <p>: {price}$</p>
     </div>
     <div className=' flex items-center  gap-1'>
      <p className='text-2xl font-bold'><TbCategory2/></p>
      <p>: {category}</p>
     </div>
    </div>
   <div className="m-2 overflow-hidden rounded-xl">
   <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
       
        modules={[EffectFlip, Pagination, Navigation]}
        
      >
        <SwiperSlide>
          <img src={img2}  className="h-[240px] w-full rounded-xl md:h-[365px] lg:h-[500px] "/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3}  className="h-[240px] rounded-xl w-full md:h-[365px] lg:h-[500px] "/>
        </SwiperSlide>
        
      </Swiper>
   </div>
<div className="m-2">
<p  className='flex justify-center '><Rating style={{ maxWidth: 250 }}  value={rating} readOnly itemStyles={myStyles}/></p>
</div>

    <div className="card-actions justify-center m-2">
      <Link to="/order">
      <button className="btn btn-error text-xl w-[300px] md:w-[600px] lg:w-[800px] xl:980px  hover:cursor-pointer hover:text-rose-900" style={{background:color}}>Make Your Order</button>
      </Link>
    </div>
  </div>
</div>
<div className="mt-4">
    <Footer/>
</div>
        </div>
    );
};

export default Servicess;