const MenuCards = ({menu}) => {
    
    const {icon,label}=menu
    return (
        <div>
             <div className="flex flex-col items-center justify-center  gap-4 hover:text-green-600  transition  cursor-pointer" >
               <img src={icon} className="h-[45px]" />
              <p className=" text-sm mx-3 dark:text-teal-500">  {label}</p>
            </div>
        </div>
    );
};

export default MenuCards;