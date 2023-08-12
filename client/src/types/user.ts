export interface User {
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    passGroup: {
        password: string,
        repass: string,
    }

}