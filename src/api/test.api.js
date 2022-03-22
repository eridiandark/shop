import config from "../configs/config.json";

export function testApi(){
    console.log(config);
    return fetch(config.backendUrl, {
        method: "get"
    }).then(res => res.json())
}