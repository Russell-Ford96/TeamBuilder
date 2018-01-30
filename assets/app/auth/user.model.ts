export class User {
    constructor(public email: string,
                public password: string,
                public userName?: string,
                public dob?: string,
                public gender?: string,
                public country?: string) {}
}