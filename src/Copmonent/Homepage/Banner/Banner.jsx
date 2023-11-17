import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const Banner = () => {
 useEffect(() => {
    AOS.init({
        speed:1000
    });
 },[]);
    return (
        <div className="w-[95%] mx-auto -mt-4 mb-3 ">
            <div className="hero bg-green-300 dark:bg-teal-200 rounded-lg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="grid grid-cols-2 gap-3">
    <div className="">
    <img src="https://i.ibb.co/3Md3c78/pexels-pixabay-416405.jpg" className="mb-2  rounded-lg hover:scale-150 "   data-aos="fade-up"/>
    <img src="https://i.ibb.co/4RwxmGp/pexels-pawe-l-1320737.jpg" className=" rounded-lg  hover:scale-150 "   data-aos="fade-up"/>
    </div>
    <div className="m-">
    <img src="https://i.ibb.co/0hWRz1D/pexels-engin-akyurt-2036686.jpg" className="mb-2  rounded-lg hover:scale-150 "  data-aos="fade-up"/>
    <img src="https://i.ibb.co/N3Gktyn/pexels-kaique-rocha-47221.jpg" className=" rounded-lg  hover:scale-150 "   data-aos="fade-up"/>
    </div>
    </div>
    <div className="m-3">
      <div>
      <h1 className="text-5xl font-bold text-black text-center">WHO WE ARE</h1>
      <p className="text-black text-xl font-semibold text-center">WELCOME TO DARNA CONSTRUCTION</p>
      </div >
      <p className="py-6 text-black text-xl font-medium text-center">Temporibus autem quibusdam et aut officiis debitis is aut rerum necessitatibus saepe eveniet ut et seo lage voluptates repudiandae sint et molestiae non mes  for recusandae Creating a sustainable future through building preservation. Etiam viverra, metus nec feugiat pretium, nisi sapien auctor dui, at iaculis diam quam tincidunt leo. Integer sit amet ligula molestie, ullamcorper turpis gravida, nisi sapien auctor dui, at iaculis diam quam tincidunt leo. Integer sit amet ligula molestie, ullamcorper turpis gravida,  bibendum risus. Sed convallis consectetur sem, id hendrerit massa posuere nec..</p>
      <div className="flex justify-center">
      <button className="btn btn-success w-[250px] text-center text-xl text-black">About Us</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;