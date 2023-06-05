/**
 * Say we have an endpoint that creates a user.
 * Another endpoint that updates some fields of the user.
 */

interface User {
    readonly id: number;
    name: string;
    email: string;
    profilePic: string;
    age: number;
}

// Update can be partial
// We want to reuse User interface not create a new one.
// We use utility type for this.
// function updateUser(user: Partial<User>){
//     // some logic
// }

updateUser({age: 30})

// Let's say we don't allow email to be updated.
// We can update updateUser as below
// function updateUser(user: Omit<User, "email" | "id">){
//     // some logic
//     // user.id = 123;
//     // user.
// }

// Say we have an endpoint that needs id and email to generate token.
// The function will only accept those fields.
// We can use Omit but Pick might be better
// function updateUser(user: Pick<User, "id" | "email" >){
//     // user.
//     // some logic
// }

// function updateUser(user: Partial<Pick<User, "id" | "email" >>){
//     // user.
//     // some logic
// }

// updateUser({})