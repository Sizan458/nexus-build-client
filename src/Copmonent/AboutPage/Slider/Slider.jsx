import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

const Slider = () => {
    return (
        <div className='m-2 w-[95%] mx-auto'>
           <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
       
      >
        <SwiperSlide><img src='https://i.ibb.co/kBdmrVX/high-angle-measuring-tools-still-life.jpg' className='h-[180px] w-full md:h-[300px] lg:h-[380px] xl:h-[470px]'/></SwiperSlide>
        <SwiperSlide><img src='https://i.ibb.co/MpwSgtR/top-view-measuring-tools-still-life.jpg' className='h-[180px] w-full md:h-[300px] lg:h-[380px] xl:h-[470px]'/></SwiperSlide>
        <SwiperSlide><img src='https://i.ibb.co/n6NbDhn/floor-plan-1857175-1920.jpg' className='h-[180px] w-full md:h-[300px] lg:h-[380px] xl:h-[470px]'/></SwiperSlide>
        <SwiperSlide><img src='https://i.ibb.co/Xbk4cf6/2874961-8104.jpg' className='h-[180px] w-full md:h-[300px] lg:h-[380px] xl:h-[470px]'/></SwiperSlide>
        <SwiperSlide><img src='https://i.ibb.co/Qdr8qPg/5985041-7226.jpg' className='h-[180px] w-full md:h-[300px] lg:h-[380px] xl:h-[470px]'/></SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default Slider;