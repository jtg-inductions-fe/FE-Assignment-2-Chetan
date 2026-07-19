import { ROLE } from '@constants';

export interface FormData {
    email: string;
    password: string;
}

export interface LoginResponse {
    access_token: string;
    token_type: string;
}

export interface AuthState {
    accessToken: string | null;
}

export interface BaseUser {
    name: string;
    email: string;
    city: string;
    state: string;
    zipcode: string;
    balance: string;
    prefrence: string;
}

export interface User extends BaseUser {
    password: string;
    readonly role: typeof ROLE.ADMIN | typeof ROLE.USER;
}

export interface UserResponse extends BaseUser {
    id: string;
}
