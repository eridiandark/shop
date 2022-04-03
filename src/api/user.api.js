import config from "../configs/config.js";

export function loginApi(data){
    return fetch(config.backendUrl + '/api/login', {
        method: "post",
        headers: new Headers({
            "Content-Type": "application/json",
        }),
        body: JSON.stringify(data),
    });
}