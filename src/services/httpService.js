import axios from 'axios';

export const httpGet = (url)=>{
    return axios.get(url);
}

export const httpPost = (url, data)=>{
    console.log(data);
    return axios(
        {
            method: 'post',
            url: url,
            headers: {'Content-Type': 'application/json'},
            data: JSON.stringify(data),
        }
    );

}