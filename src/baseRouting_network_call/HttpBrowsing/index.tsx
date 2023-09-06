import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_BACKEND_URL || process.env.REACT_APP_BACKEND_URL;
const ACCESS_TOKEN_NAME = import.meta.env.VITE_APP_ACCESS_TOKEN_NAME || process.env.REACT_APP_ACCESS_TOKEN_NAME;

const https = axios.create({
    baseURL: BASE_URL,
    responseType: "json",
});

function getHeaders(secure = false) {
    let headers;
    if (secure) {
        headers = {
            "content-Type": "application/json",
            Authorization: localStorage.getItem(ACCESS_TOKEN_NAME),
        };
    } else {
        headers = {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN_NAME),
        };
    }
    return headers;
}

function get(url: string, issecure: boolean) {
    return https.get(url, {
        headers: getHeaders(issecure),
    });
}
function post(url: string, data: object, isSecure: boolean | undefined) {
    return https.post(url, data, {
        headers: getHeaders(isSecure),
    });
}
function put(url: string, data: object, issecure: boolean | undefined) {
    return https.put(url, data, {
        headers: getHeaders(issecure),
    });
}
function remove(url: string, isSecure: boolean | undefined) {
    return https.delete(url, { headers: getHeaders(isSecure) });
}

export default {
    post,
    get,
    remove,
    put,
};