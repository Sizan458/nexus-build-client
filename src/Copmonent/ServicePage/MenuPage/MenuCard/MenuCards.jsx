import { useSearchParams, useNavigate } from "react-router-dom";
import qs from'query-string'
const MenuCards = ({menu,selected}) => {
   const [params ,setParams] = useSearchParams()
    const navigate = useNavigate();
    const handleClick= ()=>{
      let currentQuery ={}
    if(params){
       currentQuery = qs.parse(params.toString());
       const updateQuery = {...currentQuery,menu:label}
       const url =qs.stringifyUrl({
        url:'/service',
        query:updateQuery
       })
       navigate(url)
    }
        
    }
   params.get("menu")
    const {icon,label}=menu
    return (
        <div>
             <div className={`flex flex-col items-center justify-center border-b-2  gap-4 hover:text-green-600  transition  cursor-pointer
              ${selected?" border-b-red-700  text-rose-800":" border-b-transparent"}`} 
             onClick={handleClick} >
               <img src={icon} className="h-[45px]" />
              <p className=" text-sm mx-3 dark:text-teal-500">  {label}</p>
            </div>
            
        </div>
    );
};

export default MenuCards;