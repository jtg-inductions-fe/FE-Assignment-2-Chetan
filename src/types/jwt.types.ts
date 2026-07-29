/** Decoded fields from the JWT access token. */
export interface JwtPayload {
    id: string;
    role: string;
    exp: number;
}
