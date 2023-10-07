"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://axios-http.com/docs/api_intro API Documentation
var axios_1 = require("axios");
var config = {
    method: "POST",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: {
        title: "foo",
        body: "bar",
        userId: "1",
    },
};
// Signature 1
var test = (0, axios_1.default)(config);
test.then(function (res) {
    console.log(res.data);
}).catch(function (err) {
    console.log(err);
});
// Signature 2 define method alias
var test2 = axios_1.default
    .post("https://jsonplaceholder.typicode.com/posts", {
    title: "hehe",
    body: "haha",
    userId: "101",
})
    .then(function (res) {
    console.log(res.data);
})
    .catch(function (err) {
    console.log(err);
});
var auth = {
    authenticated: true
};
var test3 = axios_1.default.post("https://jsonplaceholder.typicode.com/posts", [auth, {
        title: "baba",
        body: "veevee",
        userId: "202",
    }]).then(function (res) {
    console.log(res.data);
}).catch(function (err) {
    console.log(err);
});
