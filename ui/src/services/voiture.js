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

export default function useVoiture() {

    async function addcar(token,data){
        head.headers.Authorization = "Bearer "+token;
        AxiosInstance = axios.create(head);
        const result = await AxiosInstance.post("/voiture/",data);
        return result.data;
    }
    async function getallcar(){
        const result = await AxiosInstance.get("/voiture");
        return result.data;
    }

    async function getcar(id){
        const result = await AxiosInstance.get("/voiture/"+id);
        return result.data;
    }


    async function deletecar(token,data){
        head.headers.Authorization = "Bearer "+token;
        AxiosInstance = axios.create(head);
        const result = await AxiosInstance.delete("/voiture/",data);
        return result.data;
    }


    return {
        addcar,getcar,getallcar,deletecar
    }

}