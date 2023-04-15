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

export default function useSuccursale() {

    async function addsuccursale(data){
        const result = await AxiosInstance.post("/succursale/",data);
        return result.data;
    }
    async function getsuccursale(){
        const result = await AxiosInstance.get("/succursale/");
        return result.data;
    }

    async function getsuccursale(id){
        const result = await AxiosInstance.get("/succursale/"+id);
        return result.data;
    }


    async function deletesuccursale(data){
        const result = await AxiosInstance.delete("/succursale/",data);
        return result.data;
    }


    return {
        addsuccursale,getsuccursale,deletesuccursale
    }

}