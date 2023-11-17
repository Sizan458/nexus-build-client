import useAxios from "../../../Hooks/useAxios/useAxios";
import {
    useQuery,
   
  } from '@tanstack/react-query'
import MenuCards from "../MenuCard/MenuCards";
const Menu = () => {
    const axios=useAxios()
const {data:menus} = useQuery({
    queryKey:["menu"],
    queryFn:async()=>{
        const res = await axios.get("/category")
        return res.data
    }
})

    return (
        <div className="flex items-center justify-between mt-[10px] w-[90%] mx-auto overflow-x-auto">
            {
             menus&&   menus.map(menu=><MenuCards key={menu._id} menu={menu}/>)
            }
        </div>
    );
};

export default Menu;