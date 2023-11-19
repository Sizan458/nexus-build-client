import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero m-3 bg-fixed bg-cover w-[98%]  mx-auto h-[30vh] md:h-[50vh] lg:h-[60vh] xl:h-[65vh]" style={{backgroundImage: 'url(https://i.ibb.co/6D3C5Nm/high-angle-pie-chart-with-cities.jpg)'}}>
  <div className="hero-overlay "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;