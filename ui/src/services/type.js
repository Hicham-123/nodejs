import axios from "axios"

const hostip = "http://localhost:3000";

var head = {
    baseURL: hostip,
    timeout: 8000,
    headers: {
        Authorization:"",
        Accept: 'application/json',
    },
}
var AxiosInstance = axios.create(head);
export default function useType() {

    async function addtype(data){
        const result = await AxiosInstance.post("/type/",data);
        return result.data;
    }
    async function gettype(){
        const result = await AxiosInstance.get("/type/");
        return result.data;
    }

    async function gettype(id){
        const result = await AxiosInstance.get("/type/"+id);
        return result.data;
    }


    async function deletetype(data){
        const result = await AxiosInstance.delete("/type/",data);
        return result.data;
    }


    return {
        addtype,gettype,deletetype
    }

}