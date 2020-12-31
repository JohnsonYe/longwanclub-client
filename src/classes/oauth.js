import { postRequest } from './rest';

class Oauth {
    constructor () {
        this.host = "https://api.longwanclubs.com";
    }
    login(login_id, password) {
        return postRequest(`${this.host}/api/oauth/login`, {
            "login_id": login_id,
            "password": password
        }).then(response => {
            const user = {};
            user.name = response.data.name;
            user.login_id = response.data.contact_number;
            user.refresh_token = response.data.refresh_token;
            user.access_token = response.data.access_token;
            return user;
        }).catch(err => {
            if (err.statusCode === '401') {
                throw new Error(err.message);
            } else {
                throw new Error(err.message);
            }
        });
    }

    register(login_id, password, last_name, first_name, id) {
        return postRequest(`${this.host}/api/oauth/register`, {
            "login_id": login_id,
            "password": password,
            "first_name": last_name,
            "last_name": first_name,
            "identification_number": id
        }).then(response => {
            const user = {};
            user.name = response.data.name;
            user.login_id = response.data.contact_number;
            user.refresh_token = response.data.refresh_token;
            user.access_token = response.data.access_token;
            return user;
        }).catch(err => {
            if (err.statusCode === '401') {
                throw new Error(err.message);
            } else {
                throw new Error(err.message);
            }
        });
    }

    renew(token) {
        return postRequest(`${this.host}/api/oauth/token/refresh`, {
            "refresh_token": token
        }).then(response => {
            const user = {};
            user.name = response.data.name;
            user.login_id = response.data.login_id;
            user.refresh_token = response.data.refresh_token;
            user.access_token = response.data.access_token;
            return user;
        }).catch(err => {
            if (err.statusCode === '401') {
                throw new Error(err.message);
            } else {
                throw new Error(err.message);
            }
        });
    }
}

export default Oauth;