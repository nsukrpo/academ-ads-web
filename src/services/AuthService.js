import axios from "axios"
import { URL_PATH } from "../Constants"

class AuthService {
    login(login, password){
        return axios.post(URL_PATH+"/login", {
            login: login,
            password: password
        })
        .then(response => {
            if (response.data){
                const data = parseJwt(response.data);
                localStorage.setItem("token", JSON.stringify(data));
                localStorage.setItem("user", JSON.stringify(data.user_id));
                localStorage.setItem("role", JSON.stringify(data.role));
            }
            return response.data
        })
    }

    logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        localStorage.removeItem("role")
    }

    getCurrentToken() {
        return JSON.parse(localStorage.getItem('token'))
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'))
    }
    getCurrentRole() {
        return JSON.parse(localStorage.getItem('role'))
    }
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

export default new AuthService()