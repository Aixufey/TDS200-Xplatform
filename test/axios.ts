// https://axios-http.com/docs/api_intro API Documentation
import axios, { AxiosResponse } from "axios";


const config = {
    method: "POST",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: {
        title: "foo",
        body: "bar",
        userId: "1",
    },
};

// Signature 1
const test = axios(config);
test.then((res: AxiosResponse) => {
    console.log(res.data);
}).catch((err) => {
    console.log(err);
});

// Signature 2 define method alias
const test2 = axios
    .post("https://jsonplaceholder.typicode.com/posts", {
        title: "hehe",
        body: "haha",
        userId: "101",
    })
    .then((res: AxiosResponse) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    });

const auth = {
    authenticated: true
}
const test3 = axios.post("https://jsonplaceholder.typicode.com/posts", [auth, {
    title: "baba",
    body: "veevee",
    userId: "202",
}]).then((res: AxiosResponse) => {
    console.log(res.data);
}).catch((err) => { 
    console.log(err);
});



