export interface FormData {
    email: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
    tokenType: string;
}

export interface AuthState {
    accessToken: string | null;
    id: string | null;
    role: string | null;
}
