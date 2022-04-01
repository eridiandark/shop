import config from "../configs/config.js";

export function testApi(data){
    return fetch(config.backendUrl + '/api/login', {
        method: "post",
        headers: new Headers({
            /*Authorization: accessToken,*/
            "Content-Type": "application/json",
        }),
        body: JSON.stringify(data),
    });
}

export function testApi2(accessToken){
    return fetch(config.backendUrl + '/api/data', {
        method: "get",
        headers: new Headers({
            Authorization: accessToken,
            "Content-Type": "application/json",
        }),
    });
}