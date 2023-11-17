import axios from "axios";
const instance= axios.create({
    baseURL:'https://nexus-build-server.vercel.app',
   
})
const useAxios = () => {
    return  instance
};

export default useAxios;