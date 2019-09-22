import axios from 'axios';

export const httpGet = (url)=>{
    return axios.get(url);
}

export const httpPost = (url, data)=>{
    return axios.post(url, data);
}