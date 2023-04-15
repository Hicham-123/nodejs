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

export default function useLocation() {

    async function addlocation(token,data){
        head.headers.Authorization = "Bearer "+token;
        AxiosInstance = axios.create(head);
        const result = await AxiosInstance.post("/location/",data);
        return result.data;
    }

    async function getpricelocation(token,data){
        head.headers.Authorization = "Bearer "+token;
        AxiosInstance = axios.create(head);
        const result = await AxiosInstance.post("/location/price",data);
        return result.data;
    }

    async function checklocation(token,data){
        head.headers.Authorization = "Bearer "+token;
        AxiosInstance = axios.create(head);
        const result = await AxiosInstance.post("/location/check",data);
        return result.data;
    }

    async function getalllocation(token,id){
        head.headers.Authorization = "Bearer "+token;
        AxiosInstance = axios.create(head);
        const result = await AxiosInstance.get("/location/all/"+id);
        return result.data;
    }

    async function getlocation(token,id){
        head.headers.Authorization = "Bearer "+token;
        AxiosInstance = axios.create(head);
        const result = await AxiosInstance.get("/location/"+id);
        return result.data;
    }

    async function deletelocation(data){
        const result = await AxiosInstance.delete("/location/",data);
        return result.data;
    }

    async function updatelocation(data){
        const result = await AxiosInstance.put("/location/",data);
        return result.data;
    }

    return {
        addlocation,getpricelocation,getlocation,deletelocation,updatelocation,checklocation,getalllocation
    }

}