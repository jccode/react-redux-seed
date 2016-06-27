
const _fetch = async function (url, options = {}) {
    const response = await fetch(url, options);
    if(response.status == 203) {
        console.log("You haven't login yet. Please login first!");
        return Promise.reject("Login required.");
    }
    else {
        return response.json();
    }
};


export function get(url, options = {}) {
    return _fetch(url, Object.assign({}, options, {method: "GET"}));
}

export function post(url, options = {}) {
    return _fetch(url, Object.assign({}, options, {method: "POST"}));
}
