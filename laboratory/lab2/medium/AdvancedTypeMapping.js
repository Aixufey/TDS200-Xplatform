/*
    Oppgave 1: Advanced Type Mapping
    Opprett typene PartialProps og RequiredProps som endrer optional og
    required egenskaper i et objekt. Bruk disse typene på en interface og logg de
    resulterende typene.
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * Suppose a UPDATE operation where we want to update a user, but we don't know which properties
 * will be updated. We can make them all optionals.
 * @param user - The user to update
 * @param updateUser - The properties to update
 * @returns
 */
var updateUser = function (user, updateUser) {
    return __assign(__assign({}, user), updateUser);
};
// Created user
var user = {
    name: 'John',
    age: 38,
    email: 'mail@example.com',
    password: 'password'
};
// Update the user
var updatedUser = updateUser(user, { email: 'writeme@mail.com' });
console.log(updatedUser);
/**
 * The opposite of Partial is Required which makes all properties required
 * @param user - The user to create
 * @param createUser - The properties required to create a user
 * @returns a new user with all properties required
 */
var createUser = function (user, createUser) {
    return __assign(__assign({}, user), createUser);
};
var created = createUser(user, { email: "mail@me.com", password: "pass123" });
console.log(created);
