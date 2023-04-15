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

export default function usePrix() {

    async function addprice(data){
        const result = await AxiosInstance.post("/prix/",data);
        return result.data;
    }
    async function getprice(){
        const result = await AxiosInstance.get("/prix/");
        return result.data;
    }

    async function getprice(id){
        const result = await AxiosInstance.get("/prix/"+id);
        return result.data;
    }


    async function deleteprice(data){
        const result = await AxiosInstance.delete("/prix/",data);
        return result.data;
    }


    return {
        addprice,getprice,deleteprice
    }

}