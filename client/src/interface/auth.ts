
export enum Role {
    user = "user",
    editor = "editor",
    admin = "admin",
}



export interface IUser {
    id?: string;
    first_name: string,
    last_name: string,
    image: string,
    roles: Role.user,
    password: string,
    email: string,
    phone: number,
    address: string,
    date_of_birth: string,
    gender: string,
    created_at: Date,
    updated_at: Date,
}