export interface Post {
    email: string,
    firstName: string,
    lastName: string,
    passGroup: {
        password: string,
        repass: string,
    }

}