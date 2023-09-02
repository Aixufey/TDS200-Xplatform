/*
    Oppgave 1: Advanced Type Mapping
    Opprett typene PartialProps og RequiredProps som endrer optional og 
    required egenskaper i et objekt. Bruk disse typene på en interface og logg de
    resulterende typene.
*/

// This is the interface
interface User {
    name?: string
    age?: number
    email?: string
    password?: string
}

/**
 * Suppose a UPDATE operation where we want to update a user, but we don't know which properties
 * will be updated. We can make them all optionals.
 * @param user - The user to update
 * @param updateUser - The properties to update
 * @returns 
 */
const updateUser = (user: User, updateUser: Partial<User>): User => {
    return {
        ...user,
        ...updateUser,
    }
}

// Created user
const user: User = {
    name: 'John',
    age: 38,
    email: 'mail@example.com',
    password: 'password'
}
// Update the user
const updatedUser = updateUser(user, { email: 'writeme@mail.com' })
console.log(updatedUser)



/*
    Suppose we require email and password to create a user
    We use Require<Type> with Pick<T, Union> to combine
*/
type RegisterUser = Required<Pick<User, "email" | "password">>

/**
 * The opposite of Partial is Required which makes all properties required
 * @param user - The user to create
 * @param createUser - The properties required to create a user
 * @returns a new user with all properties required
 */
const createUser = (user: User, createUser: Required<RegisterUser>): User => {
    return {
        ...user,
        ...createUser,
    }
}

const created = createUser(user, { email: "mail@me.com", password: "pass123" })
console.log(created)
