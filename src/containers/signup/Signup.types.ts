import { ROLE } from '@constants';

export interface BaseUser {
    name: string;
    email: string;
    city: string;
    state: string;
    zipcode: string;
    balance: string;
    preference: string;
}

export interface User extends BaseUser {
    password: string;
    readonly role: typeof ROLE.ADMIN | typeof ROLE.USER;
}

export interface UserResponse extends BaseUser {
    id: string;
}
