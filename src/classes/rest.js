import axios from 'axios';

export async function postRequest(url, body) {
    try {
        const response = await axios.post(url, body);
        return response.data;
        // console.log("response: abcde, ",response);
    } catch(err) {
        let response = err.request.response;
        throw (JSON.parse(response));
    }
}