import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
const Slider = () => {
    
    return (
        <div className="w-[97%] mx-auto  mt-4">
           <Carousel autoPlay infiniteLoop  className="rounded-lg  ">
                <div>
                <div className="hero  h-[60vh]  bg-cover " style={{backgroundImage: 'url(https://i.ibb.co/JFgWzCG/pexels-olga-lioncat-7245333.jpg)'} }>
  <div className="hero "></div>
  <div className="hero-content text-center text-neutral-content">
    <div  className="max-w-md">
      <h1 className="mb-5 text-2xl font-bold md:text-3xl">Welcome To Our Website</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button  className="btn btn-accent  ">Get Started</button>
    </div>
  </div>
</div>
                       </div>
                <div>
                <div className="hero h-[60vh] bg-cover " style={{backgroundImage: 'url(https://i.ibb.co/WkS3cy4/pexels-anamul-rezwan-1216589.jpg)'}}>
  <div className="hero "></div>
  <div className="hero-content text-center text-neutral-content">
    <div  className="max-w-md">
      <h1 className="mb-5 text-2xl font-bold md:text-3xl">Welcome To Our Website</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-accent">Get Started</button>
    </div>
  </div>
</div>
                    
                </div>
                <div>
                <div className="hero h-[60vh] bg-cover"  style={{backgroundImage: 'url(https://i.ibb.co/1XPNjhS/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-c.jpg)'}}>
  <div className="hero "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-2xl font-bold md:text-3xl">Welcome To Our Website</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-accent">Get Started</button>
    </div>
  </div>
</div>
                    
                </div>
            </Carousel> 
        </div>
    );
};

export default Slider;