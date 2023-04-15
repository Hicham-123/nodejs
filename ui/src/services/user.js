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

export default function useUser() {

    async function login(data){
        const result = await AxiosInstance.post("/users/login",data);
        return result.data;
    }
    async function register(data){
        const result = await AxiosInstance.post("/users/register",data);
        return result.data;
    }

    async function addrole(token,data){
        head.headers.Authorization = "Bearer "+token;
        AxiosInstance = axios.create(head);
        const result = await AxiosInstance.post("/users/role",data);
        return result.data;
    }

    async function getroleid(token,id){
        head.headers.Authorization = "Bearer "+token;
        AxiosInstance = axios.create(head);
        const result = await AxiosInstance.get("/users/role/"+id);
        return result.data;
    }

    async function getalluser(token){
        head.headers.Authorization = "Bearer "+token;
        AxiosInstance = axios.create(head);
        const result = await AxiosInstance.get("/users/");
        return result.data;
    }

    async function getusers(token,id){
        head.headers.Authorization = "Bearer "+token;
        AxiosInstance = axios.create(head);
        const result = await AxiosInstance.get("/users/"+id);
        return result.data;
    }

    async function deleteuser(token,id){
        head.headers.Authorization = "Bearer "+token;
        AxiosInstance = axios.create(head);
        const result = await AxiosInstance.delete("/users/"+id);
        return result.data;
    }

    async function deleteuser(token){
        head.headers.Authorization = "Bearer "+token;
        AxiosInstance = axios.create(head);
        const result = await AxiosInstance.delete("/users/");
        return result.data;
    }

    return {
        addrole, deleteuser, getusers, register, login, getalluser,getroleid
    }

}