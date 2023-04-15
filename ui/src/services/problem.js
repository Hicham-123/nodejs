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

export default function useProblem() {

    async function addproblem(data){
        const result = await AxiosInstance.post("/problem/",data);
        return result.data;
    }
    async function getproblem(){
        const result = await AxiosInstance.get("/problem/");
        return result.data;
    }

    async function getproblem(id){
        const result = await AxiosInstance.get("/problem/"+id);
        return result.data;
    }


    async function deleteproblem(data){
        const result = await AxiosInstance.delete("/problem/",data);
        return result.data;
    }


    return {
        addproblem,getproblem,deleteproblem
    }

}