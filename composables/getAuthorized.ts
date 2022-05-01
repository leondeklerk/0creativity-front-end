export default function (url: string, token: string): Promise<unknown> {
    return fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            tenant: "root",
            Authorization: `bearer ${token}`
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer" // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    })
        .then((res: Response) => {
            if (res.status < 300 && res.status > 100) {
                return Promise.resolve(res);
            } else {
                return Promise.reject(res);
            }
        })
        .catch((err) => {
            return Promise.reject(err);
        });
}
