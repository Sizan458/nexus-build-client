import { AiOutlineArrowRight } from "react-icons/ai"

const WhatWeDo = () => {
    return (
        <div className="mx-4 rounded-lg bg-fixed bg-cover bg-opacity-60  lg:h-[70vh]" style={{backgroundImage: 'url(https://i.ibb.co/njjvVgy/pexels-pixabay-159306.jpg)'}}>
           <div className="hero  rounded-lg" >
  <div className="hero-overlay "></div>
  <div className="hero-content text-center   grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  lg:justify-center lg:h-[434px] xl:h-[532px] ">
  <div className="card   bg-transparent bg-opacity-60 ">
  <div className="card-body">
    <div className="flex flex-row-reverse text-3xl text-white font-bold   justify-center gap-1">
    <button className=""><AiOutlineArrowRight/></button>
    <h1>01</h1>
    </div>
    <h2 className="card-title  flex justify-center text-2xl font-bold text-yellow-600 ">SKETCHING</h2>
    <p className=" text-sm font-medium text-white ">Aenean commodo ligula eget dolor. Aeneane penatibus et mag penatibus et magnis nis dis parturient montes, nascetur ridiculus mus donec quam felis.</p>
    
  </div>
</div>
  <div className="card  bg-transparent bg-opacity-60 ">
  <div className="card-body">
  <div className="flex flex-row-reverse text-3xl text-white font-bold   justify-center gap-1">
    <button className=""><AiOutlineArrowRight/></button>
    <h1>02</h1>
    </div>
    <h2 className="card-title  flex justify-center text-2xl font-bold text-yellow-600 ">WORKING</h2>
    <p className=" text-sm font-medium text-white ">Aenean commodo ligula eget dolor. Aeneane penatibus et mag penatibus et magnis nis dis parturient montes, nascetur ridiculus mus donec quam felis.</p>
    
  </div>
</div>
  <div className="card    bg-transparent bg-opacity-60 ">
  <div className="card-body">
  <div className="flex flex-row-reverse text-3xl text-white font-bold   justify-center gap-1">
    <button className=""><AiOutlineArrowRight/></button>
    <h1>03</h1>
    </div>
    <h2 className="card-title  flex justify-center text-2xl font-bold text-yellow-600 ">UTILIZATION</h2>
    <p className=" text-sm font-medium text-white ">Aenean commodo ligula eget dolor. Aeneane penatibus et mag penatibus et magnis nis dis parturient montes, nascetur ridiculus mus donec quam felis.</p>
    
  </div>
</div>
  <div className="card   bg-transparent bg-opacity-60 ">
  <div className="card-body">
  <div className="flex flex-row-reverse text-3xl text-white font-bold   justify-center gap-1">
    <button className=""><AiOutlineArrowRight/></button>
    <h1>04</h1>
    </div>
    <h2 className="card-title  flex justify-center text-2xl font-bold text-yellow-600 ">DELIVERY</h2>
    <p className=" text-sm font-medium text-white ">Aenean commodo ligula eget dolor. Aeneane penatibus et mag penatibus et magnis nis dis parturient montes, nascetur ridiculus mus donec quam felis.</p>
    
  </div>
</div>
   
  </div>
</div>
        </div>
    );
};

export default WhatWeDo;