import useAxios from "../../Hooks/useAxios/useAxios";

const Form = () => {
    const axios =useAxios()
    const handleOrder=e=>{
        e.preventDefault();
        const from = e.target
        const name  = from.name.value
        const email = from.email.value
        const type = from.type.value
        const service = from.service.value
        const user={name,email,type,service}
        console.log(user)
        //send to database
    axios.post("/order",user)
    }
    return (
        <div className="w-[90%] mt-2 mx-auto  md:w-[80%]  lg:w-[70%] xl:w-[40%]" >
            <form onSubmit={handleOrder}>
                <div className=" form-control m-2">
                    <label>
                        <h1 className="text-xl font-bold text-white">Name</h1>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered input-warning w-[315px] md:w-[580px] lg:w-[650px] " />
                    </label>
                
                </div>
                <div className=" form-control m-2">
                    <label>
                        <h1 className="text-xl font-bold text-white">Email</h1>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered input-warning w-[315px] md:w-[580px] lg:w-[650px] " />
                    </label>
                
                </div>
                <div className=" form-control m-2">
                    <label>
                        <h1 className="text-xl font-bold text-white">Service Type</h1>
                        <select name="type" className="select select-warning w-[315px] md:w-[580px] lg:w-[650px]">
  
  <option value="Residential " >Residential</option>
  <option value="Commercial">Commercial</option>
  <option value='Engineering'>Engineering</option>
  <option value="Renovation">Renovation</option>
  <option value="Architectural">Architectural</option>
  <option value="Maintenance">Maintenance</option>
</select>
                    </label>
                
                </div>
                <div className=" form-control m-2">
                    <label>
                        <h1 className="text-xl font-bold text-white ">Service Name</h1>
                        <select name="service" className="select select-warning w-[315px] md:w-[580px] lg:w-[650px]">
  
  <option value="Custom Home Building " >Custom Home Building</option>
  <option value="Home Renovations">Home Renovations</option>
  <option value='Home Additions'>Home Additions</option>
  <option value="Office Building">Office Building</option>
  <option value="Retail Space">Retail Space</option>
  <option value="Infrastructure Development">Infrastructure Development</option>
  <option value="Road Construction">Road Construction</option>
  <option value="Bridge Construction">Bridge Construction</option>
  <option value="Architectural Design">Architectural Design</option>
  <option value="3D Rendering and Visualization">3D Rendering and Visualization</option>
  <option value="Building Information Modeling">Building Information Modeling</option>
  <option value="Kitchen Remodeling">Kitchen Remodeling</option>
  <option value="Bathroom Renovations">Bathroom Renovations</option>
  <option value="Whole House Renovations">Whole House Renovations</option>
  <option value="Building Maintenance">Building Maintenance</option>
  <option value="Emergency Repairs">Emergency Repairs</option>
</select>
                    </label>
                
                </div>

                <button className="btn glass text-xl font-semibold text-black m-3 w-[315px] md:w-[580px] lg:w-[650px]">Order</button>
            </form>
    
        </div>
    );
};

export default Form;