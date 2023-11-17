import Marquee from "react-fast-marquee";
const Mar = () => {
    return (
        <div>
               <h1 className="text-3xl text-center font-semibold text-black m-3 dark:text-red-600 hover:text-lime-600">LATEST PROJECTS</h1>
               
               <div className="m-3">
            <Marquee speed={90} pauseOnClick direction="right" gradient gradientWidth={110} gradientColor="#b3fff0">
                <img src="https://i.ibb.co/HnYxn4Y/building-849849-1920.jpg"  className="h-[250px] w-[300px] rounded-xl border-rose-300 mx-2 hover:scale-y-150  transition" />
                <img src="https://i.ibb.co/cQ5C55V/building-2722757-1920.jpg"  className="h-[250px]  w-[300px] rounded-xl border-rose-300 mx-2 hover:scale-y-150 transition" />
                <img src="https://i.ibb.co/wKMHBCm/home-2861604-1920.jpg"  className="h-[250px]  rounded-xl  w-[300px] border-rose-300 mx-2 hover:scale-y-150 transition" />
                <img src="https://i.ibb.co/8g2LxtW/site-4527357-1920.jpg"  className="h-[250px]  rounded-xl  w-[300px] border-rose-300 mx-2 hover:scale-y-150 transition" />
                <img src="https://i.ibb.co/NskxCHR/mega-project-4702962-1920.jpg"  className="h-[250px]  rounded-xl  w-[300px] border-rose-300 mx-2 hover:scale-y-150 transition" />
                <img src="https://i.ibb.co/55Br2YY/crane-2344530-1920.jpg"  className="h-[250px]  rounded-xl  w-[300px] border-rose-300 mx-2 hover:scale-y-150 transition" />
                </Marquee>
               </div>
        </div>
    );
};

export default Mar;