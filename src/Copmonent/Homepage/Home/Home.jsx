import Footer from "../../Footer/Footer";
import Banner from "../Banner/Banner";
import Mar from "../Marquee/Marquee";
import Slider from "../Slider/Slider";
import WhatWeDo from "../WhatWeDo/WhatWeDo";

const Home = () => {
    return (
        <div>
            <div >
                <Slider/>
            </div>
            <div>
                <Banner/>
            </div>
            <div>
                <WhatWeDo/>
            </div>
            <div>
                <Mar/>
            </div>
            <div >
                <Footer/>
            </div>
        </div>
    );
};

export default Home;