import dotenv from 'dotenv';
dotenv.config();

const idclient = () =>{
    return process.env.client;
}

export default idclient;