import Footer from "../../Footer/Footer";
import ServicesAll from "../Allservices/ServicessAll/ServicesAll";
import Menu from "../MenuPage/Menu/Menu";

const Services = () => {
    return (
        <div>
            <div>
                <Menu/>
            </div>
            <div>
                <ServicesAll/>
            </div>
            <div className=" mx-2 mt-2">
                <Footer/>
            </div>
        </div>
    );
};

export default Services;