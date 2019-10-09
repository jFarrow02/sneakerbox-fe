import axios from 'axios';
//axios.defaults.headers.common['Authorization'] = store.getState().authToken;

export const httpGet = (url, headers)=>{
    return axios(
        {
            method: 'get',
            url: url,
            headers: headers,
        }
    )
}

export const httpPost = (url, data, headers)=>{
    return axios(
        {
            method: 'post',
            url: url,
            headers: headers,
            data: JSON.stringify(data),
        }
    );
}
