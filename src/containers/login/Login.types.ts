/** Login form input values. */
export interface FormData {
    email: string;
    password: string;
}

/** API response after a successful login. */
export interface LoginResponse {
    accessToken: string;
    tokenType: string;
}

/** Shape of the auth slice in the Redux store. */
export interface AuthState {
    accessToken: string | null;
    id: string | null;
    role: string | null;
}
